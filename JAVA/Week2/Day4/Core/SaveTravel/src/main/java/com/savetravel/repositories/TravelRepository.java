package com.savetravel.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.savetravel.models.Travel;

public interface TravelRepository extends CrudRepository<Travel, Long> {

	// Find ALL TRAVLS
	List<Travel> findAll();
}
