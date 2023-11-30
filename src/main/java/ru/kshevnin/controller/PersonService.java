package ru.kshevnin.controller;

import com.demo.model.Person;
import com.demo.model.PersonDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService implements PersonServiceble {
    private PersonDAO personDAO;

    @Autowired
    public void setPersonDAO(PersonDAO personDAO) {
        this.personDAO = personDAO;
    }

    @Override
    public List<Person> allPersons() {
        return personDAO.allPersons();
    }

    //@Transactional
    @Override
    public String add(Person person) {
        return personDAO.add(person);
    }

    //@Transactional
    @Override
    public boolean delete(Person person) {
        return personDAO.delete(person);
    }

    //@Transactional
    @Override
    public boolean edit(Person person) {
        return personDAO.edit(person);
    }

    @Override
    public Person getById(String tabNum) {
        return personDAO.getById(tabNum);
    }
}
