import axios from 'axios'

const COURSES_REST_API_URL = 'https://ucsb-course-recommender.herokuapp.com/api/courses';

class CourseService {

    getCourses(){
        return axios.get(COURSES_REST_API_URL);
    }
}

export default new CourseService();
