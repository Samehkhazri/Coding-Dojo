<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Dojo</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+Wy6qfdCS5gTVFlpT3Ai9xgBVoJ6kojXvc"
        crossorigin="anonymous">
    <!-- Your own local CSS -->
    <link rel="stylesheet" href="/css/main.css">
</head>
<body class="bg-light">

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow">
                <div class="card-header bg-dark text-light">
                    <h1 class="text-warning">New Dojo</h1>
                </div>
                <div class="card-body">
                    <form:form class="p-4" action="/dojos/processDojo" method="post" modelAttribute="dojo">
                        <div class="form-group">
                            <label for="name" class="text-dark">Name :</label>
                            <form:input class="form-control" path="name"/>
                            <form:errors class="text-danger" path="name"/>
                        </div>   
                        <button class="btn btn-warning mt-3" type="submit">Create</button>
                    </form:form>
                </div>
            </div>
        </div>
    </div>
</div>


</body>
</html>
