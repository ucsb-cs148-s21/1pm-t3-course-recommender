import React from 'react';
import CourseService from '../services/CourseService';

class CourseComponent extends React.Component {

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
                    courses: classes.map(c => {
                        const { courseId, title, deptCode } = c
                        return {
                            courseId,
                            title,
                            deptCode
                        }
                    })
                })
                // this.setState({ courses: response.data})
            });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Courses List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Course Id</td>
                            <td> Course courseName</td>
                            <td> Course department</td>
                            <td> Course prerequisite</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.courses.length > 0 && this.state.courses.map(course => {
                                const { courseId, title, deptCode } = course
                                return (
                                    <tr key = {`${courseId}`}>
                                        <td> {courseId}</td>   
                                        <td> {title}</td>   
                                        <td> {deptCode}</td>   
                                        <td> '-'</td>   
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