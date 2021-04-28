import axios from 'axios'

const COURSES_REST_API_URL = 'http://localhost:8080/api/courses';

class CourseService {

    getCourses(){
        return axios.get(COURSES_REST_API_URL);
    }
}

export default new CourseService();