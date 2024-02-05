package com.anis.burger.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anis.burger.model.Burger;
import com.anis.burger.repositories.BurgerRepository;

@Service
public class BurgerService {

	// Business LOGIC
	// C R U D
	
	// DI
	@Autowired
	private BurgerRepository burgerRepo;
	
	public BurgerService(BurgerRepository burgerRepo) {
		this.burgerRepo=burgerRepo;
	}
	
	// READ ALL
	public List<Burger> allBurger(){
		return burgerRepo.findAll();
	}
	
	// CREATE
	public Burger createburger(Burger b) {
		return burgerRepo.save(b);
	}
	
	
	// READ ONE
	public Burger findBurgerById(Long id) {
		Optional<Burger> maybeBurger = burgerRepo.findById(id);
		if(maybeBurger.isPresent()) {
			return maybeBurger.get();
		}else {
			return null;
		}
	}
	
	// UPDATE
	public Burger updateBurger(Burger b) {
		return burgerRepo.save(b);
	}
	
}

