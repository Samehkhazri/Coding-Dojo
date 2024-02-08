package com.sameh.books.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.sameh.books.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	// Find ALL BOOKS
	List<Book> findAll();
}
