<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Demo JSP</title>

    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>

<div class="container">
    <h1>Edit Expense</h1>        <a href="/travel" class="btn btn-primary">Go Back</a>
    <!-- Update a Book Form -->
    <form:form action="/travel/${travel.id }" method="post" modelAttribute="travel" class="form">
        <input type="hidden" name="_method" value="put">
        <form:errors path="*" class="alert alert-danger" role="alert"/>
        <div class="form-group">
            <form:label path="expensName">Expense Name:</form:label>
            <form:input path="expensName" class="form-control" />
        </div>
        <div class="form-group">
            <form:label path="vendor">Vendor:</form:label>
            <form:input path="vendor" class="form-control" />
        </div>
        <div class="form-group">
            <form:label path="amount">Amount</form:label>
            <form:input type="number" path="amount" class="form-control" />
        </div>
        <div class="form-group">
            <form:label path="description">Description:</form:label>
            <form:textarea path="description" class="form-control" />
        </div>
        <input type="submit" value="Submit" class="btn btn-primary" />
    </form:form>
</div>

<!-- Include Bootstrap JS and jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>
