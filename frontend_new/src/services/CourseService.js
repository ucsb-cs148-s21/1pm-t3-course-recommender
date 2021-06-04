import axios from 'axios'

// const COURSES_REST_API_URL = 'https://ucsb-course-recommender.herokuapp.com/api/courses';
const UCSB_DEVELOPER_API_URL = 'https://api.ucsb.edu/academics/curriculums/v3/classes/search?quarter=20212&deptCode=CMPSC&pageSize=500&includeClassSections=true'
const API_KEY = process.env.REACT_APP_UCSB_API_KEY;

class CourseService {
    formatCoursesData(data) {

    }

    getCourses() {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('ucsb-api-version', '3.0')
        headers.append('ucsb-api-key', `${API_KEY}`)

        return fetch(UCSB_DEVELOPER_API_URL, {
            method: 'GET',
            headers
        })
    }
}

export default new CourseService();
