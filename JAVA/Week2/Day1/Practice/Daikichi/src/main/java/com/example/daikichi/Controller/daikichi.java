package com.example.daikichi.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class daikichi {
	
	@RequestMapping("/daikichi")
	public String welcom() {
		return "Welcom!";
	}
	
	@RequestMapping("/daikichi/today")
	public String today() {
		return "<h1>Today you will find luck in all your endeavers!</h1>";
	}
	@RequestMapping("/daikichi/tomorrow")
	public String tomorrow() {
		return "<h1>Tomorrow , an apportunity will arise , so be sure to be new ideas!</h1>";
	}

}
