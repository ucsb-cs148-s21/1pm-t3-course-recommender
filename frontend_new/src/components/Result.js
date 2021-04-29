import React from 'react';

function checkPrerequisite(prerequisite, selectedCourses) {
    return selectedCourses.includes(prerequisite);
}

export const Result = () => {

    const courses = [
        {
            id: 1,
            courseName: "CMPSC 8",
            department: "CMPSC",
            prerequisite: "",
        },
        {
            id: 2,
            courseName: "CMPSC 16",
            department: "CMPSC",
            prerequisite: "CMPSC 8",
        },
        {
            id: 3,
            courseName: "CMPSC 24",
            department: "CMPSC",
            prerequisite: "CMPSC 16",
        },
        {
            id: 4,
            courseName: "CMPSC 32",
            department: "CMPSC",
            prerequisite: "CMPSC 24",
        },
        {
            id: 5,
            courseName: "CMPSC 40",
            department: "CMPSC",
            prerequisite: "CMPSC 16",
        }
    ]

    const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses'));

    let resultCourses = [];
    for (let i = 0; i < courses.length; ++i) {
        let exist = false;
        for (let j = 0; j < selectedCourses.length; ++j) {
            if (courses[i].courseName == selectedCourses[j]) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            if (checkPrerequisite(courses[i].prerequisite, selectedCourses)) {
                resultCourses.push(courses[i]);
            }
        }
    }
    // console.log(JSON.stringify(resultCourses));
    // debugger;

    return (
        <div>
            <h1 className = "text-center"> Here's a list of course you can take</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td> Course Id</td>
                        <td> CourseName</td>
                        <td> Department</td>
                        <td> Prerequisite</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        resultCourses.map(
                            course => 
                            <tr key = {course.id}>
                                 <td> {course.id}</td>   
                                 <td> {course.courseName}</td>   
                                 <td> {course.department}</td>   
                                 <td> {course.prerequisite}</td>   
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}