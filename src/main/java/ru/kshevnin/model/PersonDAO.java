package ru.kshevnin.model;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class PersonDAO implements Personable{
    private static Map<String, Person> persons = new HashMap<>();
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public List<Person> allPersons() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Person").list();
    }

    @Override
    public String add(Person person) {

            Session session = sessionFactory.getCurrentSession();
            session.getTransaction().begin();
            session.save(person);
            session.getTransaction().commit();
            return person.getTabNum();
    }

    @Override
    public boolean delete(Person person) {
        Session session = sessionFactory.getCurrentSession();
        session.getTransaction().begin();
        session.delete(person);
        session.getTransaction().commit();
        return true;
    }

    @Override
    public boolean edit(Person person) {
        Session session = sessionFactory.getCurrentSession();
        session.getTransaction().begin();
        session.update(person);
        session.getTransaction().commit();
        return true;
    }

    @Override
    public Person getById(String tabNum) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Person.class, tabNum);
    }
}
