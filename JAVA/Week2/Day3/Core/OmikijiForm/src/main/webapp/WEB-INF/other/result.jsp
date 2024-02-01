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
<body class="bg-light">
    <div class="container mt-5">
        <h1 class="display-4 text-center mb-4">Here's Your Omikuji!</h1>
        <p class="lead">In ${number} years, you will live in ${city} with ${name} as your roommate ${hobby} for a living. The next time you see a ${type}, you will have good luck. Also, ${description}</p>
        <a href="/form" class="btn btn-primary">Go back</a>
    </div>
</body>
</html>
