package com.example.Human.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Human {
	
	
	@RequestMapping("/")
	public String Hi (){
		return "Hello Human ";
	}

//	@RequestMapping("/")
//	public String Hello(@RequestParam(value = "name") String nom) {
//		return "Hello " + nom;
//	}

}
