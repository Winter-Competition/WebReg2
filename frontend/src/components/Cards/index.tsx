import * as React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

const availableColors = ["#BBAEBD", "#EDBE7E", "#D8918E", "#A7BCB9", "#E67976", "#CBADEF"];

interface courseDict {
  num: any
  code: string
  days: string
  start: string
  end: string
  am_pm: string
  building: string
}

const testing = [{num: 0, code: "35630", days: "Tu/Th", start: "9:30", end: "10:50", am_pm: "AM", building: "EH 1200"},
                  {num: 1, code: "31610", days: "M/W/F", start: "5:00", end: "5:50", am_pm: "PM", building: "Some Building"}, 
                  {num: 2, code: "47881", days: "Tu/Th", start: "11:00", end: "12:20", am_pm: "PM", building: "Old Building"}, 
                  {num: 3, code: "11882", days: "M/W/F", start: "4:00", end: "4:50", am_pm: "PM", building: "New Building"}];

function courseCardComp(courseObj: courseDict) {
  let code = courseObj.code;
  let days = courseObj.days;
  let start = courseObj.start;
  let end = courseObj.end;
  let am_pm = courseObj.am_pm;
  let building = courseObj.building;
  let num = courseObj.num
  let color_changes = availableColors[num]

  return (
    <Card className="card-body">
      <Card.Body className="card-color" style={{backgroundColor: color_changes}}>
      <Button variant="danger" className="remove-button">X</Button>
        <Card.Title className="card-tite">{code}: Name of Class</Card.Title>
        <Card.Text className="card-text">
          <p>{days} {start}-{end} {am_pm}</p>
          <p>{building}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const CourseCards = () => {
    const [courses, changeCourses] = useState<any[]>(testing);
    const [numCourses, changeNumCourses] = useState(0)
    return (
    <>
      {/* <Button variant="primary" onClick={ () => {changeNumCourses(numCourses+1)}}>
        Button 1
      </Button>
      <Button variant="primary" onClick={ () => {changeCourses([...courses, testing[numCourses]])}}>
        Button 2
      </Button> */}
      <h3>
        {
            courses.map((course) => {
                return (<p>{courseCardComp(course)}</p>)
            })
        }
      </h3>
    </>
    );
}

export default CourseCards;