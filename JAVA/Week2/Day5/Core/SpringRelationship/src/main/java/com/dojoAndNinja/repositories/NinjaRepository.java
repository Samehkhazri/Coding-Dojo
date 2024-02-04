package com.dojoAndNinja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojoAndNinja.models.Ninja;
@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {

	// Find ALL BOOKS
	List<Ninja> findAll();
}
