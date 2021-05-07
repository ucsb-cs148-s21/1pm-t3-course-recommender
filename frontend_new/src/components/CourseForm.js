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
        },
        {
            id: 6,
            courseName: "CMPSC 48",
            department: "CMPSC",
            prerequisite: "CMPSC 16",
        },
        {
            id: 7,
            courseName: "CMPSC 64",
            department: "CMPSC",
            prerequisite: "CMPSC 16",
        },
        {
            id: 8,
            courseName: "CMPSC 111",
            department: "CMPSC",
            prerequisite: "CMPSC 24",
        },
        {
            id: 9,
            courseName: "CMPSC 130A",
            department: "CMPSC",
            prerequisite: "CMPSC 40",
        },
        {
            id: 10,
            courseName: "CMPSC 130B",
            department: "CMPSC",
            prerequisite: "CMPSC 130A",
        },
        {
            id: 11,
            courseName: "CMPSC 138",
            department: "CMPSC",
            prerequisite: "CMPSC 40",
        },
        {
            id: 12,
            courseName: "CMPSC 154",
            department: "CMPSC",
            prerequisite: "CMPSC 64",
        },
        {
            id: 13,
            courseName: "CMPSC 160",
            department: "CMPSC",
            prerequisite: "CMPSC 138",
        },
        {
            id: 14,
            courseName: "CMPSC 162",
            department: "CMPSC",
            prerequisite: "CMPSC 138",
        },
        {
            id: 15,
            courseName: "CMPSC 170",
            department: "CMPSC",
            prerequisite: "CMPSC 154",
        }
        // TODO: add more courses to this list to make the survery comprehensive
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
        <div className="container">
            <div className="title-container" style={{ textAlign:'center', marginTop: 25 }}>
                <h1>Course Survey</h1>
                <h5>Enter the courses you have taken:</h5>
            </div>
            <div className="form-container" style={{ alignItems:'center', justifyContent:'center', display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={handleFormSubmit} style={{ textAlign:'center', columnCount:3}}>
                    {
                        courses.map((course, index) => {
                            let { id, courseName, department, prerequisite } = course;

                            return (
                                <div key={`course-${index}`} style={{ minWidth:200}}>
                                    <input type="checkbox" id={`course-id-${id}`} name={courseName} value={courseName} onChange={courseSelected} style= {{ marginRight:10 }}/>
                                    <label htmlFor={courseName}>{courseName}</label> 
                                </div>
                            )
                        })
                    }
                </form>
                <div style={{ alignContent:'center'}}>
                    <input type="submit" value="Submit" style={{ alignSelf:'center' }}></input>
                </div>
            </div>
        </div>
        </>
    )
}