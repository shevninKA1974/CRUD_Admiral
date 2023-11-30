package ru.kshevnin.model;

import java.util.List;

public interface Personable {
    String add(Person person);
    boolean delete(Person person);
    boolean edit(Person person);
    Person getById(String tabNum);
    List<Person> allPersons();
}
