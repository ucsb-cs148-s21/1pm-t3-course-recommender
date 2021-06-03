import React, {useEffect, useState} from 'react';
import CourseService from '../services/CourseService';
import { Preqreqs } from './Preqreqs';
import prerequisite from './prerequsite';

function checkPrerequisite(prerequisite, selectedCourses) {
    // debugger;
    if (prerequisite.length == 0) return true;
    // return selectedCourses.includes(prerequisite);
    for (let i = 0; i < prerequisite.length; ++i) {
        if (!selectedCourses.includes(prerequisite[i])) {
            return false;
        }
    }
    return true;
}

function getPrereqs(courseID) {
    const prereqVal = prerequisite[courseID]
    // debugger
    return (courseID && prereqVal) ? prereqVal : ["-"]
}

export const Result = () => {

    const [offeredCourses, setOfferedCourses] = useState([]);

    // Fetch the data once the component loads
    useEffect(() => {
        CourseService.getCourses()
        .then(data => data.json())
        .then((response) => {
            const { classes } = response

            const fetchedCourses = classes.map(course => {
                let { courseId, title, deptCode } = course
                courseId = courseId.trim()

                return {
                    id: courseId.split(' ').filter(token => token).join(' '),
                    courseName: courseId.split(' ').filter(token => token).join(' '),
                    courseTitle: title,
                    department: deptCode,
                    prerequisite: getPrereqs(courseId)
                }
            })

            // Shallow copy so React can detect an update to the array of courses:
            setOfferedCourses(JSON.parse(JSON.stringify(fetchedCourses)))
        });
    }, [])

    const getResultCourses = () => {
        let rv = [];
        if (offeredCourses.length > 0) {
            // debugger;
            for (let i = 0; i < offeredCourses.length; ++i) {
                let exist = false;
                for (let j = 0; j < selectedCourses.length; ++j) {
                    if (offeredCourses[i].courseName == selectedCourses[j]) {
                        exist = true;
                        break;
                    }
                }
                if (!exist) {
                    if (checkPrerequisite(offeredCourses[i].prerequisite, selectedCourses)) {
                        rv.push(offeredCourses[i]);
                    }
                }
            }
        }
        return rv;
    }

    const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses'));

    let resultCourses = getResultCourses();
    
    console.log(JSON.stringify(resultCourses));
    // debugger;

    return (
        <div>
            <h1 className = "text-center" style={{ padding:'1em' }}>Here is a list of courses you can take</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td>Course Id</td>
                        {/* <td>Course Name</td> */}
                        <td>Title</td>
                        <td>Department</td>
                        <td>Prerequisite(s)</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        resultCourses.map(
                            course => 
                            <tr key = {course.id}>
                                 <td> {course.id}</td>   
                                 {/* <td> {course.courseName}</td>    */}
                                 <td> {course.courseTitle}</td>
                                 <td> {course.department}</td>   
                                 {/* <td> {course.prerequisite}</td>    */}
                                 <td>
                                    <Preqreqs prereqs={course.prerequisite}/>
                                 </td>  
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}