package ucsb.course.recommender.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ucsb.course.recommender.springboot.model.Course;
import ucsb.course.recommender.springboot.repository.CourseRepository;

@SpringBootApplication
public class SpringbootApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

	@Autowired
	private CourseRepository courseRepository;

	public void run(String...args) throws Exception {
		this.courseRepository.save(new Course("CMPSC 148", "CMPSC", "CMPSC 32"));
		this.courseRepository.save(new Course("CMPSC 170", "CMPSC", "CMPSC 130A"));
		// TODO: add more courses to make the Home page more comprehensive
	}

}
