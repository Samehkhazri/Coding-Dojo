<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Demo JSP</title>
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
       
    </head>
<body class="container mt-5">
    <h1 class="text-center">Send an Omikuji!</h1>

    <form action="/processForm" method="POST">
        <div class="form-group">
            <label for="number">Enter a number:</label>
            <input type="number" class="form-control" id="number" name="number">
        </div>

        <div class="form-group">
            <label for="city">Enter the name of any city:</label>
            <input type="text" class="form-control" id="city" name="city">
        </div>

        <div class="form-group">
            <label for="name">Enter the name of any real person:</label>
            <input type="text" class="form-control" id="name" name="name">
        </div>

        <div class="form-group">
            <label for="hobby">Enter the professional endeavor or hobby:</label>
            <input type="text" class="form-control" id="hobby" name="hobby">
        </div>

        <div class="form-group">
            <label for="type">Enter any type of living:</label>
            <input type="text" class="form-control" id="type" name="type">
        </div>

        <div class="form-group">
            <label for="description">Say something nice to someone:</label>
            <input type="text" class="form-control" id="description" name="description">
        </div>

        <button type="submit" class="btn btn-warning">Submit</button>
    </form>

    
</body>
</html>
