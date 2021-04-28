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
        CourseService.getCourses().then((response) => {
            this.setState({ courses: response.data})
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
                            this.state.courses.map(
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
}

export default CourseComponent