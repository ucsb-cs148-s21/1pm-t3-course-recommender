import axios from 'axios'

const COURSES_REST_API_URL = 'https://t3-test-course-rec.herokuapp.com/api/courses';

class CourseService {

    getCourses(){
        return axios.get(COURSES_REST_API_URL);
    }
}

export default new CourseService();
