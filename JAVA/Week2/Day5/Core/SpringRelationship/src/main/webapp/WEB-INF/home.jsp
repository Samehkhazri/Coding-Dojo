<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dojo Page</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- Your local CSS -->
    <link rel="stylesheet" href="/css/main.css">
</head>
<body class="bg-light">
    <div class="container mt-4">
        <h1 class="p-3 text-center"><i class="fas fa-user-ninja mr-2"></i>${dojo.name} Location Ninjas</h1>
        <table class="table table-striped table-dark text-light text-center">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${dojo.ninjas}" var="one" >
                    <tr>
                        <td scope="row">${one.firstName}</td>
                        <td>${one.lastName}</td>
                        <td>${one.age}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

    
</body>
</html>
