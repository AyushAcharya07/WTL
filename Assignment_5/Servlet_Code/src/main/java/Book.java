import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

@WebServlet("/Book")
public class Book extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public Book() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Connection con = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/bookstore", "root", "Vaishu@1512");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from ebookshop");

            out.println("<h1 style=\"text-align:center; color:#FFFFFF;\">Book Details</h1>");

            out.println("<div style=\"margin-left:25%; font-size:40px;\"><table border=\"1\" style=\"width:70%;\"><tr style=\"background-color:#78c2be; color:#fff;\"><td><strong>Book ID</strong></td><td><strong>Book Title</strong></td><td><strong>Author</strong></td><td><strong>Price</strong></td><td><strong>Quantity</strong></td></tr>");

            while (rs.next()) {
                out.println("<tr style=\"color:#000;\"><td>" + rs.getString(1) + "</td><td>" + rs.getString(2) + "</td><td>" + rs.getString(3) + "</td><td>" + rs.getString(4) + "</td><td>" + rs.getString(5) + "</td></tr>");
            }
            
            out.println("</table></body>");
        } catch (Exception e) {
            out.println(e);
        } finally {
            try {
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                out.println(e);
            }
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
