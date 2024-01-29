package com.example.Daikichi.path.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PathController {
	
	
	@RequestMapping("/{name}/{id}")
	public String daikichi(@PathVariable("name") String nom , @PathVariable("id") int id) {
		
		String sameh = "Hello "+ nom + " Your Id is : ";
//		return sameh.repeat(id);
		return sameh + id;
	}
	
	
	@RequestMapping("/daikichi/{action}/{name}")
	public String dikich(@PathVariable("action") String action , @PathVariable("name") String name) {
		
		
		return "CongratulatiOns! you will soon "+ action + " to " + name;
	}
	
	@RequestMapping("/text/{id}")
	public String hello(@PathVariable("id") int id) {
		
		String text;
		if (id==6) {
			text = "text1=6";
		}else if (id==37) {
			text = "tesxt2=37";
		}else {
			text = "tesxt2=no";}
		
		return text;
		
	}

}
