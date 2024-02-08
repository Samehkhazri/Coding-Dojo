<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo JSP</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<h1>Book Store</h1>
		<!-- 		Display all Books -->
		${allBooks  }
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allBooks }" var="oneBook">
					<tr>
						<td>${oneBook.id}</td>
						<td>${oneBook.title}</td>
						<td>${oneBook.author}</td>
						<td>${oneBook.pages}</td>
						<td><a href="/books/edit/${oneBook.id }">Edit</a>
							<form action="/books/${oneBook.id}" method="post">
								<input type="hidden" name="_method" value="delete"> <input
									type="submit" value="Delete">
							</form></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		<!-- 		Create a Book Form -->
		<form:form action="/books/processBook" method="post"
			modelAttribute="book">
			<form:errors path="*" />
			<p>
				<form:label path="title">Title</form:label>

				<form:input path="title" />
			</p>
			<p>
				<form:label path="author">Author</form:label>

				<form:input path="author" />
			</p>

			<p>
				<form:label path="pages">Pages</form:label>

				<form:input type="number" path="pages" />
			</p>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>