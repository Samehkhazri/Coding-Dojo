<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Demo JSP</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/main.css" />
</head>
<body>
    <div class="container mt-5">
        <h1>Save Travels</h1>

        <!-- Display all Books -->
        ${allTravel }

        <table class="table">
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    <th>Expense</th>
                    <th>Vendor</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${allTravel}" var="oneTravel">
                    <tr>
                        <!-- <td>${oneTravel.id}</td> -->
                        <td><a href="/travel/${oneTravel.id}">${oneTravel.expensName}</a></td>
                        <td>${oneTravel.vendor}</td>
                        <td>$ ${oneTravel.amount}</td>
                        <td>
                            <a href="/travel/edit/${oneTravel.id }" class="btn btn-warning btn-sm">Edit</a>
                            <form action="/travel/${oneTravel.id}" method="post" style="display:inline;">
                                <input type="hidden" name="_method" value="delete">
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <hr>
        <h3>Add an expense:</h3>
        <form:form action="/travel/processTravel" method="post" modelAttribute="travel" class="mt-3">
            <form:errors path="*"/>
            <div class="form-group">
                <label for="expensName">Expense Name:</label>
                <form:input path="expensName" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="vendor">Vendor:</label>
                <form:input path="vendor" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="amount">Amount:</label>
                <form:input type="number" path="amount" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <form:textarea path="description" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form:form>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-aR6dwaRIhpERLJ3LAV+wsP3HivnTKtHWzFwag7a4KQ5tr5YI+RN2ayAcG+Zcf3I" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6YIYYz1IlxRn0cHqn7vT3IwMW8xV" crossorigin="anonymous"></script>
</body>
</html>
