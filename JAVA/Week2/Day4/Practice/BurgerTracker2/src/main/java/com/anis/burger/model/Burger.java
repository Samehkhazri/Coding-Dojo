package com.anis.burger.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name="burgers")
public class Burger {
		// member variables
			@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long id;
			
			
		    private String burgerName;
		   
		    private String restaurantName;
		  
		    private String notes;
		    
		    private Integer rating; 
		    // This will not allow the createdAt column to be updated after creation
		    @Column(updatable=false)
		    @DateTimeFormat(pattern="yyyy-MM-dd")
		    private Date createdAt;
		    @DateTimeFormat(pattern="yyyy-MM-dd")
		    private Date updatedAt;

		    // zero-args constructor
		    public Burger() {
		    }
		    //
		    @PrePersist
		    protected void onCreate(){
		        this.createdAt = new Date();
		    }
		    @PreUpdate
		    protected void onUpdate(){

		        this.updatedAt = new Date();
		    }
		    //getters
			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getBurgerName() {
				return burgerName;
			}

			public void setBurgerName(String burgerName) {
				this.burgerName = burgerName;
			}

			public String getRestaurantName() {
				return restaurantName;
			}

			public void setRestaurantName(String restaurantName) {
				this.restaurantName = restaurantName;
			}

			public String getNotes() {
				return notes;
			}

			public void setNotes(String notes) {
				this.notes = notes;
			}

			public Integer getRating() {
				return rating;
			}

			public void setRating(Integer rating) {
				this.rating = rating;
			}

			public Date getCreatedAt() {
				return createdAt;
			}

			public void setCreatedAt(Date createdAt) {
				this.createdAt = createdAt;
			}

			public Date getUpdatedAt() {
				return updatedAt;
			}

			public void setUpdatedAt(Date updatedAt) {
				this.updatedAt = updatedAt;
			}

}
