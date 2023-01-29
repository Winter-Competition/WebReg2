import * as React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logout from "../../assets/image/logout.png";

const class_code = "35630";
const class_days = "Tu/Th";
const time_start = "9:30";
const time_end = "10:50";
const am_pm = "AM";
const building = "EH 1200";

const testing = [{code: "Class 1"}, {code: "Class 2"}, {code: "Class 3"}, {code: "Class 4"}];

const CourseCards = () => {
    const [courses, changeCourses] = useState<any[]>([]);
    const [numCourses, changeNumCourses] = useState(0)

    return (
    <>
      <Button variant="primary" onClick={ () => {changeNumCourses(numCourses+1)}}>
        Button 1
      </Button>
      <Button variant="primary" onClick={ () => {changeCourses([...courses, testing[numCourses]])}}>
      {/* <Button variant="secondary" onClick={ () => {changeCourses(courses.push("Class 4"))}}> */}
        Button 2
      </Button>
      <h3>
        {
            courses.map((course) => {
                return (<p>{course.code}</p>)
            })
        }
      </h3>
    </>
    );
}

export default CourseCards;