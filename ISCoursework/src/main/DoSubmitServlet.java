package main;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class DoSubmit
 */
@WebServlet("/DoSubmit")
public class DoSubmitServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DoSubmitServlet() {
        super();
       
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//response.setContentType("text/html");
		//response.setContentType("text/html;charset=UTF-8");
//		PrintWriter out = response.getWriter();
		
		String message = request.getParameter("text2hide");
		
		//get img file from session
		HttpSession session = request.getSession(false); 
		try{
			
			if(session.getAttribute("file")!=null)
			{
				FileMeta imgFile = (FileMeta)session.getAttribute("file");
				
				InputStream input = imgFile.getContent();
				
				Steganography steg = new Steganography();
				
				InputStream modImg = steg.encode(input, "png", message);
				
				session.setAttribute("modImg",modImg);
				
				System.out.println(message+"-- jjjj-- "+imgFile.getFileSize());
				
				
						try {  
						//Set the response content type = file content type
				        response.setContentType(imgFile.getFileType());
						response.setHeader("Content-disposition", "attachment; filename=\""+imgFile.getFileName()+"\"");
						
					
				        
				 		 OutputStream output = response.getOutputStream();
				        byte[] buffer = new byte[1024*10];
				
				        for (int length = 0; (length = modImg.read(buffer)) > 0;) {
				            output.write(buffer, 0, length);
				            
				        }
				
				        //remv
				        System.out.println("-- download-- "+imgFile.getFileName());
				        
				        
				        output.close();
				        input.close();
				   }catch (IOException | NullPointerException e) {
				       e.printStackTrace();
	
				       
				   }
			}
			
		}
		catch (NullPointerException e) {
		       e.printStackTrace();
		       
		      //send to userSignin page with error msg
	            RequestDispatcher rs = request.getRequestDispatcher("encode.html");
	            rs.include(request, response);
		       
		   }
		
		
		
   
				session.invalidate();

		
	}

}
