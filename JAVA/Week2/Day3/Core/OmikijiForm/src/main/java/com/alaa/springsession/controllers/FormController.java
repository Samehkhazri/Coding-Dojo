package com.alaa.springsession.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class FormController {

	@GetMapping("/form")
	public String displayForm() {
		
		return "/other/form.jsp";
	}
	
	@PostMapping("/processForm")
	public String process(@RequestParam("number") int number,
							@RequestParam("city") String city,
							@RequestParam("name") String name,
							@RequestParam("hobby") String hobby,
							@RequestParam("type") String type,
							@RequestParam("description") String desc,
							
								HttpSession s) {
		System.out.println(city + " " + name + " "+ hobby +" "+ type+" " + desc + number);
		s.setAttribute("number", number);
		s.setAttribute("city", city);
		s.setAttribute("name", name);
		s.setAttribute("hobby", hobby);
		s.setAttribute("type", type);
		s.setAttribute("description", desc);
		
		return "redirect:/results";
	}
	
	@GetMapping("/results")
	public String res() {
		
		return "/other/result.jsp";
	}
	
	
	
	
}
