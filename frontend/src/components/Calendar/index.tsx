import * as React from "react";
import "./style.css";
import { useState } from 'react';

const availableColors = ["#BBAEBD", "#EDBE7E", "#D8918E", "#A7BCB9", "#E67976", "#CBADEF"];

interface courseDict {
  num: any
  code: string
  days: string
  start: string
  end: string
  am_pm: string
  building: string
};
const eventHandler = ["", "event"]
function TimeConverter(s: string, e: string){
  const hm1 = s.split(":");
  let hour1 = hm1[0];
  let min1 = hm1[1];

  const hm2 = e.split(":");
  let hour2 = hm2[0];
  let min2 = hm2[1];

  let hourdiff = Number(hour2) - Number(hour1);
  let mindiff = Number(min2) - Number(min1);

  const resultMid = ((hourdiff*100)+(mindiff*10/6));
  const heightVar = parseInt(resultMid.toString());
  return(heightVar.toString()+"%")
};

const testing = [{num: 0, code: "35630", days: "Tu/Th", start: "9:30", end: "10:50", am_pm: "AM", building: "EH 1200"},
                  {num: 1, code: "31610", days: "M/W/F", start: "5:00", end: "5:50", am_pm: "PM", building: "Some Building"}, 
                  {num: 2, code: "47881", days: "Tu/Th", start: "11:00", end: "12:20", am_pm: "PM", building: "Old Building"}, 
                  {num: 3, code: "11882", days: "M/W/F", start: "4:00", end: "4:50", am_pm: "PM", building: "New Building"}];

function ClassEight(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">8:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
      <tr>
        <td className="headcol">8:00</td>
        <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassNine(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">9:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">9:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassNineHalf(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol"></td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassTen(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">10:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">10:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassEleven(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">11:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">11:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassTwelve(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">12:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">12:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassOne(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">1:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">1:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function classTwo(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">2:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">2:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassThree(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">3:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">3:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassThreeHalf(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol"></td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassFour(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">4:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">4:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassFive(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">5:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">5:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassSix(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">6:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">6:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassSeven(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">7:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">7:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassEightPM(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">8:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">8:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassEightHalfPM(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol"></td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};
function ClassNinePM(courseObj: courseDict|null){
  if(courseObj===null){
    return(
      <tr>
        <td className="headcol">9:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
    )
  }
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let friday = 0;
  let mondayinfo = "";
  let tuesdayinfo = "";
  let wednesdayinfo = "";
  let thursdayinfo = "";
  let fridayinfo = "";
  let colorM = "";
  let colorTu = "";
  let colorW = "";
  let colorTh = "";
  let colorF = "";
  if (courseObj.days.includes("M")){
    monday = monday+1;
    mondayinfo = courseObj.code
    colorM = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Tu")){
    tuesday = tuesday+1;
    tuesdayinfo = courseObj.code
    colorTu = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("W")){
    wednesday = wednesday+1;
    wednesdayinfo = courseObj.code
    colorW = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("Th")){
    thursday = thursday+1;
    thursdayinfo = courseObj.code
    colorTh = availableColors[courseObj.num]
  }
  if (courseObj.days.includes("F")){
    friday = friday+1;
    fridayinfo = courseObj.code
    colorF = availableColors[courseObj.num]
  }
  return(
    <tr>
      <td className="headcol">8:00</td>
      <td><div className={eventHandler[monday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorM}}>{mondayinfo}</div></td>
          <td><div className={eventHandler[tuesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTu}}>{tuesdayinfo}</div></td>
          <td><div className={eventHandler[wednesday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorW}}>{wednesdayinfo}</div></td>
          <td><div className={eventHandler[thursday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorTh}}>{thursdayinfo}</div></td>
          <td><div className={eventHandler[friday]} style={{height: TimeConverter(courseObj.start, courseObj.end), background: colorF}}>{fridayinfo}</div></td>
    </tr>
  )
};

function courseBlockComp(courseObjs: courseDict[]) {
  // let code = courseObj.code;
  // let days = courseObj.days;
  // let start = courseObj.start;
  // let end = courseObj.end;
  // let am_pm = courseObj.am_pm;
  // let building = courseObj.building;
  // let num = courseObj.num
  // let color_changes = availableColors[num]
  return (
    <div className="outer">
    <table>
    <thead>
      <tr>
        <th className="headcol"></th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
      </tr>
    </thead>
    </table>
        <div className="wrap"> 
          <table className="offset">
            <tbody>
                {ClassEight(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassNine(null)}
                {ClassNineHalf(courseObjs[0])}
                {ClassTen(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassEleven(courseObjs[2])}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassTwelve(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassOne(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {classTwo(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassThree(null)}
                {ClassThreeHalf(null)}
                {ClassFour(courseObjs[3])}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassFive(courseObjs[1])}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassSix(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassSeven(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {ClassEightPM(null)}
                {ClassEightHalfPM(null)}
                {ClassNinePM(null)}
                <tr>
                  <td className="headcol"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

const Calendar = () => {
  const [courses, setCourses] = useState<courseDict[]>(testing);
  return (
    <div className="calendar">
      {courseBlockComp(courses)
        }
    </div>
  );
};

export default Calendar;