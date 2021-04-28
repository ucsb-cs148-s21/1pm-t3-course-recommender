package ucsb.course.recommender.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ucsb.course.recommender.springboot.model.Course;
import ucsb.course.recommender.springboot.repository.CourseRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("courses")
    public List<Course> getCourses() {
        return this.courseRepository.findAll();
    }
}
