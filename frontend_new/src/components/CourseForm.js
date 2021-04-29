import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const CourseForm = () => {
    let [selectedCourses, setSelectedCourses] = useState([]);
    let history = useHistory();

    // TODO: add an API call to get courses and then swap these hardcoded courses out:
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

    const courseSelected = event => {
        // event.preventDefault();
        let { value, checked } = event.target;
        // TODO: if the value was previously checked and now checked is false then the item must be removed from the list
        selectedCourses.find(course => course === value)
        let copy = selectedCourses;
        copy.push(value)
        setSelectedCourses(copy)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        // console.log(JSON.stringify(selectedCourses));
        // debugger;
        let { value } = event.target;

        // Clear selectedCourses from local storage (make room for new selected courses)
        localStorage.removeItem(selectedCourses);
        
        // Set selectedCourses in local storage
        localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));

        history.push('/Result');   
    }

    return (
        <>
            <h1>Header</h1>
            <form onSubmit={handleFormSubmit}>
                <h5>Enter the courses you have taken:</h5>
                {
                    courses.map((course, index) => {
                        let { id, courseName, department, prerequisite } = course;

                        return (
                            <div key={`course-${index}`}>
                                <input type="checkbox" id={`course-id-${id}`} name={courseName} value={courseName} onChange={courseSelected}/>
                                <label htmlFor={courseName}>{courseName}</label>
                            </div>
                        )
                    })
                }
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}