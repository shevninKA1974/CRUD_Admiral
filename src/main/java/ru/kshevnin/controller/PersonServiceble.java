package ru.kshevnin.controller;

import com.demo.model.Person;

import java.util.List;

public interface PersonServiceble {
    String add(Person person);
    boolean delete(Person person);
    boolean edit(Person person);
    Person getById(String tabNum);
    List<Person> allPersons();
}
