package com.dojoAndNinja.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojoAndNinja.models.Ninja;
import com.dojoAndNinja.repositories.NinjaRepository;

@Service
public class NinjaService {
	@Autowired
	private NinjaRepository ninRepo;
	
	public List<Ninja> allNinjas(){
		return ninRepo.findAll();
	}
	
	// CREATE
	public Ninja createNin(Ninja n) {
		return ninRepo.save(n);
	}
	
	
	// READ ONE
	public Ninja findNinById(Long id) {
		Optional<Ninja> maybeNin = ninRepo.findById(id);
		if(maybeNin.isPresent()) {
			return maybeNin.get();
		}else {
			return null;
		}
	}
}