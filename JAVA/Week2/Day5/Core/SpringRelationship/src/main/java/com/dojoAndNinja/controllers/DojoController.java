package com.dojoAndNinja.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dojoAndNinja.models.Dojo;
import com.dojoAndNinja.services.DojoService;
import com.dojoAndNinja.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {

    @Autowired
    private NinjaService NinServ;

    @Autowired
    private DojoService DojoServ;

    @GetMapping("/new")
    public String showDojoForm(@ModelAttribute("dojo") Dojo dojo) {
        return "dojos.jsp";
    }

    @PostMapping("/processDojo")
    public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo,
                             BindingResult result, RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            return "dojos.jsp";
        } else {
            Dojo newDojo = DojoServ.createDojo(dojo);
            redirectAttributes.addFlashAttribute("message", "Dojo created successfully!");
            return "redirect:/dojos/" + newDojo.getId();
        }
    }

    @GetMapping("/{id}")
    public String showDojoDetails(@PathVariable Long id, Model model) {
        Dojo saved = DojoServ.findDojoById(id);
        model.addAttribute("dojo", saved);
        return "home.jsp";
    }
}
