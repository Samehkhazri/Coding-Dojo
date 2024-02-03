package com.savetravel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.savetravel.models.Travel;
import com.savetravel.services.TravelService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/travel")
public class TravelController {
	
	
	@Autowired
	private TravelService travelServ ;
	
	
	@GetMapping("")
	public String home(@ModelAttribute ("travel") Travel travel , Model model) {
		
		List<Travel> allTravel = travelServ.allTravel();
		model.addAttribute("allTravel" ,allTravel);
		
		return "home.jsp";
		
	}
	@PostMapping("/processTravel")
	public String createTravel(@Valid @ModelAttribute ("travel") Travel travel,
			BindingResult result, 
			Model model) {
		if (result.hasErrors()) {
			List<Travel> allTravel = travelServ.allTravel();
			model.addAttribute("allTravel", allTravel);
			return"home.jsp";
		}else {
			Travel newTravel = travelServ.createTravel(travel);
			return "redirect:/travel";
		}
			
	}
	@DeleteMapping("/{id}")
	public String deleteTravel(@PathVariable("id") Long id) {
		
		travelServ.deleteTravel(id);
		
		return "redirect:/travel";
	}
	
	
	// Display Edit Form
	
	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the book by the id
		Travel selectedTravel = travelServ.findTravelById(id);
		model.addAttribute("travel",selectedTravel);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated travel to DB
			travelServ.updateTravel(travel);
		
			return "redirect:/travel";
		}
	

	}
	@GetMapping("/{id}")
	public String findOneTravelById(@ModelAttribute("travel")Travel travel,@PathVariable("id") Long id, Model model) {
		Travel selectedTravel = travelServ.findTravelById(id);
		model.addAttribute("travel",selectedTravel);
		return "showOne.jsp";
	}
	
	

}
