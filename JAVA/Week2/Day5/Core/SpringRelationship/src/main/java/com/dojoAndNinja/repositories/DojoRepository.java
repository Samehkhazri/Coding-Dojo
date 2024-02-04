package com.dojoAndNinja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojoAndNinja.models.Dojo;
@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long> {

	// READ ALL
	List<Dojo> findAll();
}
