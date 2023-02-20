package com.omo.service;

import java.util.List;
import com.omo.dto.Person;

public interface PersonService {
	List<Person> getPersons();
	Person getPerson(Integer id);
	void insertPerson(Person person);
	Person updatePerson(Integer id, Person person);
	Integer deletePerson(Integer id);
}