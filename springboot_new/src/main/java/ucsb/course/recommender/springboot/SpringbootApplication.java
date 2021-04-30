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
		this.courseRepository.save(new Course("CMPSC 8", "CMPSC", ""));
		this.courseRepository.save(new Course("CMPSC 16", "CMPSC", "CMPSC 8"));
		this.courseRepository.save(new Course("CMPSC 24", "CMPSC", "CMPSC 16"));
		this.courseRepository.save(new Course("CMPSC 32", "CMPSC", "CMPSC 24"));
		this.courseRepository.save(new Course("CMPSC 40", "CMPSC", "CMPSC 16"));
		this.courseRepository.save(new Course("CMPSC 64", "CMPSC", "CMPSC 16"));
		this.courseRepository.save(new Course("CMPSC 111", "CMPSC", "CMPSC 24"));
		this.courseRepository.save(new Course("CMPSC 130A", "CMPSC", "CMPSC 32"));
		this.courseRepository.save(new Course("CMPSC 130B", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 138", "CMPSC", "CMPSC 40"));
		this.courseRepository.save(new Course("CMPSC 140", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 148", "CMPSC", "CMPSC 32"));
		this.courseRepository.save(new Course("CMPSC 154", "CMPSC", "CMPSC 148"));
		this.courseRepository.save(new Course("CMPSC 156", "CMPSC", "CMPSC 32"));
		this.courseRepository.save(new Course("CMPSC 160", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 162", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 165A", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 165B", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 170", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 171", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 174A", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 176A", "CMPSC", "CMPSC 32"));
		this.courseRepository.save(new Course("CMPSC 176B", "CMPSC", "CMPSC 176A"));
		this.courseRepository.save(new Course("CMPSC 176C", "CMPSC", "CMPSC 176B"));
		this.courseRepository.save(new Course("CMPSC 177", "CMPSC", "CMPSC 170"));
		this.courseRepository.save(new Course("CMPSC 178", "CMPSC", "CMPSC 24"));
		this.courseRepository.save(new Course("CMPSC 180", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 181", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 184", "CMPSC", "CMPSC 130A"));
		this.courseRepository.save(new Course("CMPSC 185", "CMPSC", "CMPSC 130A"));
	}

}
