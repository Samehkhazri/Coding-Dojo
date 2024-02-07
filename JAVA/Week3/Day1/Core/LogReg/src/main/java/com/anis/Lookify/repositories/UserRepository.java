package com.anis.Lookify.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.anis.Lookify.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	// for logging user
	Optional<User>findByEmail(String email);
	
}