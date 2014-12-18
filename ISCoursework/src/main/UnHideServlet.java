package main;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class UnHideServlet
 */
@WebServlet("/UnHide")
public class UnHideServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UnHideServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		//get file from session
		HttpSession session = request.getSession(); 
		
		try{
			FileMeta imgFile = (FileMeta)session.getAttribute("file");
			
			//get hidden text
			InputStream input = imgFile.getContent();
			
			Steganography steg = new Steganography();
			
			String hiddenText = steg.decode(input);
			
			//set text to freemarker data model
			request.setAttribute("msg", hiddenText);

			//forward req to freemarker template
			RequestDispatcher rs = request.getRequestDispatcher("/decodeResponse.ftl");
	        rs.include(request, response);
		}
		catch (NullPointerException e) {
		       e.printStackTrace();
		       
		      //send to userSignin page with error msg
	            RequestDispatcher rs = request.getRequestDispatcher("decode.html");
	            rs.include(request, response);
		       
		   }
		
        
        session.invalidate();
		
	}

}
