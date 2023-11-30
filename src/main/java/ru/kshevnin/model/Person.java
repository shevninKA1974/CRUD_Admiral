package ru.kshevnin.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Person {
    /*public Person(int tabNum, String sName, String name, String fName) {
        this.tabNum = tabNum;
        this.sName = sName;
        this.name = name;
        this.fName = fName;
    }*/

    @Id
    @Column(name = "c_tab_num")
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private String tabNum;

    @Column(name = "c_name")
    @Getter @Setter
    private String name;

    @Column(name = "c_fname")
    @Getter @Setter
    private String fName;

    @Column(name = "c_sname")
    @Getter @Setter
    private String sName;


}