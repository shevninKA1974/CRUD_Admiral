package ru.kshevnin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CRUD_Admiral implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(CRUD_Admiral.class, args);
	}

	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index.html");
	}
}
