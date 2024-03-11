<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Display Students Info</title>
     <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        
    </style>
</head>
<body>
    <h1>Students Information</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Division</th>
            <th>City</th>
        </tr>
        
        <% 
            try {
                // Connect to the database
                Class.forName("com.mysql.jdbc.Driver");
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/studentsdb", "root", "Vaishu@1512");

                // Create and execute SQL statement
                Statement stmt = con.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM students_info");

                // Display data in table rows
                while(rs.next()) {
        %>
                    <tr>
                        <td><%= rs.getInt("stud_id") %></td>
                        <td><%= rs.getString("stud_name") %></td>
                        <td><%= rs.getString("class") %></td>
                        <td><%= rs.getString("division") %></td>
                        <td><%= rs.getString("city") %></td>
                        
                    </tr>
        <% 
                }
                
                // Close resources
                rs.close();
                stmt.close();
                con.close();
                
            } catch(Exception e) {
                out.println("Error: " + e);
            }
        %>
    </table>
</body>
</html>