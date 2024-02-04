<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>New ninja</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/main.css">
    <!-- jQuery (required for Bootstrap JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container p-5">
    <form:form class="col-md-6 rounded-3 bg-primary text-light p-5" action="/ninjas/processNinja" method="post" modelAttribute="ninja">
        <h1 class="text-warning"><i class="fas fa-user-ninja mr-2"></i>New Ninja</h1>
        <div class="form-group p-3">
            <form:label path="dojo">Dojo :</form:label>
            <form:select path="dojo" class="form-control">
                <c:forEach items="${allDojos}" var="one">
                    <option value="${one.id}">${one.name}</option>
                </c:forEach>
            </form:select>
            <form:errors class="row text-danger" path="dojo"/>
        </div>
        <div class="form-group p-3">
            <form:label path="firstName">First Name :</form:label>
            <form:input class="form-control" path="firstName"/>
            <form:errors class="row text-danger" path="firstName"/>
        </div>
        <div class="form-group p-3">
            <form:label path="lastName">Last Name :</form:label>
            <form:input class="form-control" path="lastName"/>
            <form:errors class="row text-danger" path="lastName"/>
        </div>
        <div class="form-group p-3">
            <form:label path="age">Age :</form:label>
            <form:input class="form-control" path="age"/>
            <form:errors class="row text-danger" path="age"/>
        </div>
        <input class="col-md-4 btn btn-success" m-3" type="submit" value="Create"/>
    </form:form>
</div>

</body>
</html>
