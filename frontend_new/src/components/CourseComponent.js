import React from 'react';
import CourseService from '../services/CourseService';
import { Preqreqs } from './Preqreqs';
import prerequisite from './prerequsite';

class CourseComponent extends React.Component {
    getPrereqs(courseID) {
        const prereqVal = prerequisite[courseID]
        // debugger
        return (courseID && prereqVal) ? prereqVal : ["-"]
    }

    constructor(props){
        super(props)
        this.state = {
            courses:[]
        }
    }

    componentDidMount(){
        CourseService.getCourses()
            .then(data => data.json())
            .then((response) => {
                const { classes } = response
                this.setState({
                    courses: classes.map(course => {
                        let { courseId, title, deptCode } = course
                        courseId = courseId.trim()
                        // debugger
                        return {
                            courseId: courseId,
                            title,
                            deptCode,
                            prereqs: this.getPrereqs(courseId)
                        }
                    })
                })
                // this.setState({ courses: response.data})
            });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center" style={{ padding:'.5em'}}> Course List </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Course Id</td>
                            <td> Course Name</td>
                            <td> Department</td>
                            <td> Prerequisite(s)</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.courses.length > 0 && this.state.courses.map(course => {
                                const { courseId, title, deptCode, prereqs } = course
                                return (
                                    <tr key = {`${courseId}`}>
                                        <td> {courseId}</td>   
                                        <td> {title}</td>   
                                        <td> {deptCode}</td>   
                                        <td>
                                            <Preqreqs prereqs={prereqs}/>
                                        </td>   
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseComponent