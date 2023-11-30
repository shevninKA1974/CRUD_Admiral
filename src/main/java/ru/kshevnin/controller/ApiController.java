package ru.kshevnin.controller;

import com.demo.model.Person;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

	private static Person person;
	private final PersonService personService;

	@Autowired
	public ApiController(PersonService personService) {
		this.personService = personService;
	}

	@GetMapping("/dataPerson")
	public String dataPerson() {
		return new GsonBuilder().setPrettyPrinting().create().toJson(personService.allPersons());
	}

	@GetMapping("/delete/{tabNum}")
	public String delete(@PathVariable("tabNum") String tabNum) {
		return Boolean.toString(personService.delete(personService.getById(tabNum)));
	}
	@PostMapping(value = "/editPerson")
	public String editPerson(@RequestBody Person person) {
		personService.edit(person);
		return new GsonBuilder().setPrettyPrinting().create().toJson(person);
	}

	@PostMapping(value = "/addPerson")
	public String addPerson(@RequestBody Person person) {
		personService.add(person);
		return new GsonBuilder().setPrettyPrinting().create().toJson(person);
	}

}
