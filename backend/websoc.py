import requests
import random
from bs4 import BeautifulSoup as bs

def webSocAPI(term = "", ge = "ANY", dept = "ALL", courseNum = "", division = "ANY", secCodes = "", instrName = "", courseTitle = "", sectionType = "ALL", units = "", days = "", startTime = "", endTime = "", maxCap = "", fullCourses = "ANY", cancelledCourses = "EXCLUDE", building = "", room = ""):
    """Scrape info from webreg.

    Args:
        term: Class Term
        ge: General Education Category
        dept: Department Name
        courseNum: Course Number or Range ex. H2A, 5, 10-20
        division: Course Level
        secCodes: Course Code or Range ex. 14200, 29000-29100
        instrName: Name of Instructor ex. Smith
        courseTitle: Course Title Contains ex. Protein # Must have Instr, Course Code, Dept, or Breadth Specified
        sectionType: Course Type ex. Seminar # Must have Instr, Course Code, Dept, or Breadth Specified
        units: Units ex. 3, 4, or VAR # Must have Instr, Course Code, Dept, or Breadth Specified
        days: Days of Class ex. MWF, TuTh, W # Must have Instr, Course Code, Dept, or Breadth Specified
        startTime: Starting Time After # Must have Instr, Course Code, Dept, or Breadth Specified
        endTime: Ending Time Before # Must have Instr, Course Code, Dept, or Breadth Specified
        maxCap: Maximum Capacity ex. >50, <20 # Must have Instr, Course Code, Dept, or Breadth Specified
        fullCourses: Courses Full Option ex. Skip classes full # Must have Instr, Course Code, Dept, or Breadth Specified
        cancelledCourses: Cancelled Courses default-> Exclude Cancelled Courses 
        building: Building Code # Must have Instr, Course Code, Dept, or Breadth Specified
        room: Room Number # Must Building Specified

    Returns:
        A json response of collected info.
    """

    data = {} #final data to return

    headers = {}
    parameters = {}
    # params = {}
    websoc = "https://www.reg.uci.edu/perl/WebSoc"

    headers["User-Agents"] = f"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.{random.randrange(99)} (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36"
    parameters["ShowFinals"] = "1"
    parameters["ShowComments"] = ""
    parameters["YearTerm"] = term
    parameters["Breadth"] = ge
    parameters["Dept"] = dept
    parameters["CourseNum"] = courseNum
    parameters["Divison"] = division
    parameters["CourseCodes"] = secCodes
    parameters["InstrName"] = instrName
    parameters["CourseTitle"] = courseTitle
    parameters["ClassType"] = sectionType
    parameters["Units"] = units
    parameters["Days"] = days
    parameters["StartTime"] = startTime
    parameters["EndTime"] = endTime
    parameters["MaxCap"] = maxCap
    parameters["FullCourses"] = fullCourses
    parameters["CancelledCourses"] = cancelledCourses
    parameters["Bldg"] = building
    parameters["Room"] = room

    #reponse
    response = requests.get(websoc, params=parameters, headers=headers)
    # print(response.url)

    #beautofulsoup object
    soup = bs(response.text, features="html.parser")
    try:
        #title names
        titleNames = getActualTitles(soup)
        #title index
        titleIndex = getCourseTitleIndex(soup)
        #all data
        allData = soup.find(class_="course-list").find_all("tr")

        lst = []
        for i in range(len(allData)):
            if allData[i] in titleIndex:
                lst.append(i)
        lst.append(len(allData))

        for j in range(0,len(lst)-1):
            titleKey = titleNames[j] #course title index in dat
            dataDictKeysTemp = allData[lst[j]+1].findChildren()
            dataDictKeys = [dKeys.string for dKeys in dataDictKeysTemp]
            classDictTemplate = {}
            for dkey in dataDictKeys:
                classDictTemplate[dkey] = ""
            sections = []
            for k in range(lst[j]+2,lst[j+1]-1):
                iterDict = classDictTemplate.copy()
                #k is the class code changer
                textDataTemp = allData[k].findChildren() #allData[k] is tr and findChildren is td
                #TODO needs fix
                text_strings = []
                for l in textDataTemp:
                    if l.name != "a" and l.name != "br":
                        text_strings.append(list(l.stripped_strings))

                for i in range(len(dataDictKeys)):
                    if dataDictKeys[i] != "Instructor":
                        if len(text_strings[i]) > 0:
                            iterDict[dataDictKeys[i]] = text_strings[i][0]
                        else:
                            iterDict[dataDictKeys[i]] = None
                    else:
                        iterDict[dataDictKeys[i]] = text_strings[i]

                sections.append(iterDict)
            data[titleKey] = sections
    except:
        data = 400
    return data

def getCourseTitleIndex(soupClass):
    courseTitles = soupClass.find(class_="course-list").find_all(bgcolor="#fff0ff")
    return courseTitles

def getActualTitles(soup):
    filter_lst = ["(Prerequisites)\n\t", "\xa0"]
    classes = soup.find_all(class_="CourseTitle")
    final = []
    for i in classes:
        r = i.text
        r2 = r.split(" ")
        temp = []
        for j in r2:
            if j not in filter_lst and j != "":
                temp.append(j)
        temp_string = temp[-1]
        final_string = temp_string.replace(u'\xa0', u'')
        temp[-1] = final_string
        final.append(" ".join(temp))
    return final

def getYear() -> str:
    """Check for the newly updated course term.

    Args:
        None
    Returns:
        Current year and term

    """
    base_url = "https://www.reg.uci.edu/perl/WebSoc"
    headers = {"User-Agent": f"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.{random.randrange(99)} (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36"}
    
    response = requests.post(base_url, headers=headers)
    soup = bs(response.text, features="html.parser")
    r1 = soup.find('select').findChildren()
    result = ""
    for i in r1:
        text = i.string
        if "(Law)" not in text:
            result = text
            break
    year = result[0:4]
    tag = ""
    if "Winter" in result:
        tag = "-03"
    elif "Fall" in result:
        tag = "-92"
    elif "Spring" in result:
        tag = "-14"
    elif "Summer" in result and "10" in result:
        tag = "-39"
    elif "Summer" in result and "2" in result:
        tag = "-76"
    elif "Summer" in result and "1" in result and "Session" in result:
        tag = "-25"
    return f"{year}{tag}"