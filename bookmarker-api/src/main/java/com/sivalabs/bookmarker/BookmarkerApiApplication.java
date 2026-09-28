package com.sivalabs.bookmarker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// The retained Zalando starter targets Boot 3/Jackson 2; use Boot 4's JSON support.
@SpringBootApplication(excludeName = {
        "org.zalando.problem.spring.web.autoconfigure.ProblemAutoConfiguration",
        "org.zalando.problem.spring.web.autoconfigure.ProblemJacksonAutoConfiguration",
        "org.zalando.problem.spring.web.autoconfigure.ProblemJacksonWebMvcAutoConfiguration"
})
public class BookmarkerApiApplication {

	public static void main(String[] args) {

		SpringApplication.run(BookmarkerApiApplication.class, args);
	}

}
