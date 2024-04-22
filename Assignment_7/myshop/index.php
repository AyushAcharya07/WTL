<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Shop</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .client-table th {
            background-color: #007bff;
            color: #fff;
        }
        .client-table td {
            padding: 13px; /* Adjust the padding as needed */
        }
        .client-table tbody tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .edit-btn {
            background-color: #007bff;
            border-color: #007bff;
        }
        .edit-btn:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
        .delete-btn {
            background-color: #dc3545;
            border-color: #dc3545;
        }
        .delete-btn:hover {
            background-color: #c82333;
            border-color: #bd2130;
        }
        .client-list-container {
            margin: 0 auto;
            max-width: 800px;
        }
        .btn-container {
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <div class="container my-5 client-list-container">
        <h2 class="text-center mb-4">List of Clients</h2>
        <div class="btn-container mb-3">
            <a class="btn btn-primary" href="/myshop/create.php" role="button">New Client</a>
        </div>
        <table class="table client-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $database = "myshop";

                $connection = new mysqli($servername, $username, $password, $database);

                if ($connection->connect_error) {
                    die("Connection failed" . $connection->connect_error);
                }

                $sql = "SELECT * FROM clients";
                $result = $connection->query($sql);

                if (!$result) {
                    die("Invalid Query" . $connection->error);
                }

                while ($row = $result->fetch_assoc()) {
                    echo "
                    <tr>
                        <td>{$row['id']}</td>
                        <td>{$row['name']}</td>
                        <td>{$row['email']}</td>
                        <td>{$row['phone']}</td>
                        <td>{$row['address']}</td>
                        <td>
                            <a class='btn btn-primary btn-sm edit-btn me-2' href='/myshop/edit.php?id={$row['id']}'>Edit</a>
                            <a class='btn btn-primary btn-sm delete-btn' href='/myshop/delete.php?id={$row['id']}'>Delete</a>
                        </td>
                    </tr>
                    ";
                }
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>
