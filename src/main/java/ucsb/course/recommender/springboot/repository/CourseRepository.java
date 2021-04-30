package ucsb.course.recommender.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ucsb.course.recommender.springboot.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
