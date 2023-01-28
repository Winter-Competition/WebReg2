import uvicorn
from fastapi import FastAPI, Response, requests
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from websoc import webSocAPI, getYear

#to start copy bottom command and paste to terminal
#uvicorn main:app --reload

app = FastAPI(docs_url='/swagger')

origins = ["*"]

app.add_middleware(
     CORSMiddleware, 
     allow_origins=origins, 
     allow_credentials=True, 
     allow_methods=["*"], 
     allow_headers=["*"], 
     )

# def serve():
#     uvicorn.run(app, host="0.0.0.0", port=80)

@app.get("/api/v1/websoc2/")
async def get_courses(term = getYear(), ge = "ANY", dept = "ALL", courseNum = "", division = "ANY", secCodes = "", instrName = "", courseTitle = "", sectionType = "ALL", units = "", days = "", startTime = "", endTime = "", maxCap = "", fullCourses = "ANY", cancelledCourses = "EXCLUDE", building = "", room = ""):
    status_code = 200
    lst_courses = webSocAPI(term = term, ge = ge, dept = dept, courseNum = courseNum, division = division, secCodes = secCodes, instrName = instrName, courseTitle = courseTitle, sectionType = sectionType, units = units, days = days, startTime = startTime, endTime = endTime, maxCap = maxCap, fullCourses = fullCourses, cancelledCourses = cancelledCourses, building = building, room = room)
    if lst_courses == 400:
        status_code = 400
        lst_courses = "Invalid Query Parameter"
    return JSONResponse(lst_courses, status_code=status_code)