package com.alaa.springsession.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class SessionController {

	@GetMapping("/")
	public String index(Model model, HttpSession session) {
		String name = "James";
		model.addAttribute("username",name);
		session.setAttribute("sessionName", name);
		return "index.jsp";
	}
	@GetMapping("/other")
	public String otherPage(Model model, HttpSession sesh) {
		
		String x =  (String) sesh.getAttribute("sessionName");
		System.out.println(x);
		String up = x.toUpperCase();
		System.out.println(up);
		return "other.jsp";
	}
}
