import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import henleyGate from '../img/henleyGate.jpg';
import { SubmitBtn } from './nav-bar/elements'

export const CourseForm = () => {
    let [selectedCourses, setSelectedCourses] = useState([]);
    let history = useHistory();

    // TODO: add an API call to get courses and then swap these hardcoded courses out:
    const courses = [
        {
            id: 1,
            courseName: "MATH 3A",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 2,
            courseName: "MATH 3B",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 3,
            courseName: "MATH 4A",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 4,
            courseName: "MATH 4B",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 5,
            courseName: "MATH 6A",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 6,
            courseName: "PSTAT 120A",
            department: "MATH",
            prerequisite: "",
        },
        {
            id: 7,
            courseName: "CMPSC 8",
            // department: "CMPSC",
            // prerequisite: "",
        },
        {
            id: 8,
            courseName: "CMPSC 16",
            // department: "CMPSC",
            // prerequisite: "CMPSC 8",
        },
        {
            id: 9,
            courseName: "CMPSC 24",
            // department: "CMPSC",
            // prerequisite: "CMPSC 16",
        },
        {
            id: 10,
            courseName: "CMPSC 32",
            // department: "CMPSC",
            // prerequisite: "CMPSC 24",
        },
        {
            id: 11,
            courseName: "CMPSC 40",
            // department: "CMPSC",
            // prerequisite: "CMPSC 16",
        },
        {
            id: 12,
            courseName: "CMPSC 64",
            // department: "CMPSC",
            // prerequisite: "CMPSC 16",
        },
        {
            id: 13,
            courseName: "CMPSC 111",
            // department: "CMPSC",
            // prerequisite: "CMPSC 24",
        },
        {
            id: 14,
            courseName: "CMPSC 130A",
            // department: "CMPSC",
            // prerequisite: "CMPSC 40",
        },
        {
            id: 15,
            courseName: "CMPSC 130B",
            // department: "CMPSC",
            // prerequisite: "CMPSC 130A",
        },
        {
            id: 16,
            courseName: "CMPSC 138",
            // department: "CMPSC",
            // prerequisite: "CMPSC 40",
        },
        {
            id: 17,
            courseName: "CMPSC 140",
            department: "CMPSC",
            prerequisite: "CMPSC 130A",
        },
        {
            id: 18,
            courseName: "CMPSC 148",
            department: "CMPSC",
            prerequisite: "CMPSC 32",
        },
        {
            id: 19,
            courseName: "CMPSC 154",
            department: "CMPSC",
            prerequisite: "CMPSC 64",
        },
        {
            id: 20,
            courseName: "CMPSC 156",
            department: "CMPSC",
            prerequisite: "CMPSC 32",
        },
        {
            id: 21,
            courseName: "CMPSC 170",
            department: "CMPSC",
            prerequisite: "CMPSC 154",
        },
        {
            id: 22,
            courseName: "CMPSC 176A",
            department: "CMPSC",
            prerequisite: "CMPSC 32",
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

    const submitButtonStyle = {
        position: 'absolute',
        top: '60%',
        left: '73%',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        minWidth: 'fit-content',
        padding: '5px 15px', 
        background:'#18335d',
        color: 'gold',
        border:'0 none',
        WebkitBorderRadius:'5px'
}

    return (
        <>
        <div class="bg-image" style={{ 
            backgroundImage: `url(${henleyGate})`,
            width:'100%',
            height:'641px',
            backgroundSize: 'cover',
            backgroundPosition:'center center',
            backgroundRepeat: 'no-repeat',
            textAlign:'center',
            margin:'auto',
            padding:'0',
            minWidth:'950px'
            }} >
            <div className="container" style={{ backgroundColor:'rgba(255,255,255,0.5)', padding:'2em 4em 4em 4em'}}>
                <div className="title-container" style={{ textAlign:'center', padding:'1em' }}>
                    <h1 style={{ fontSize:'3.2em'}}>Course Survey</h1>
                    <h5>Enter the courses or equivalent you have taken:</h5>
                </div>
                <div className="form-container" style={{ alignItems:'center', justifyContent:'center', display: 'flex', flexDirection: 'column'}}>
                    <form onSubmit={handleFormSubmit} style={{ textAlign:'center', columnCount:4 }}>
                        {
                            courses.map((course, index) => {
                                let { id, courseName } = course;

                                return (
                                    <div key={`course-${index}`} style={{ minWidth:'100%', display:'inline-block', justifyContent:'space-evenly' }}>
                                        <input type="checkbox" id={`course-id-${id}`} name={courseName} value={courseName} onChange={courseSelected} style= {{ justifyContent:'center', marginInline:5 }}/>
                                        <label htmlFor={courseName}>{courseName}</label> 
                                    </div>
                                )
                            })
                        }
                        <div className="submit-btn">
                            <input type="submit" value="Submit" style={submitButtonStyle}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}