<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>AOS Final Step to Decrypt</title>
<link rel="stylesheet" href="css/jquery.mobile-1.2.0.min.css">
<script src="js/jquery-1.8.3.js"></script>
 
<script src="js/jquery.iframe-transport.js"></script>
<script src="js/jquery-ui-1.9.2.custom.js"></script>
<script src="js/jquery.fileupload.js"></script>

 
<!-- bootstrap just to have good looking page -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<link href="bootstrap/css/bootstrap.css" type="text/css" rel="stylesheet" />
 
<!-- we code these -->
<link href="css/dropzone.css" type="text/css" rel="stylesheet" />
<script src="js/myuploadfunction.js"></script>
<script src="js/forge-bundle.js"></script>
<script src="js/forge-calc-decode.js"></script> 
<style>

h1 {
	font-family: 'Brush Script MT', cursive;
	font-size: 54px;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 26.3999996185303px;
}

</style>
 
</head>
 
<body>
<div id="header">
</div>
 <div class="ui-block-a"><a href="index.html" data-role="button"><b>Home</b></a></div>
    <h1 style="text-align:center">One last step!<br></h1>
 
   
<div style="width:700px;padding:20px;S">

	<label>
    1. Input your private key to decrypt your message:<br>
   
    <textarea id="privateKey" placeholder="Paste it here..."></textarea>
	</label>
	 
	 <label>  
	 2. Click the button below to decrypt/unscramble your message using Private key!<br>
	 &nbsp;&nbsp;&nbsp;<button id="decrypt">Decrypt</button><br>
	 &nbsp;&nbsp;&nbsp;<i style="color:#808080" id="a"><small>Note: Your message will be decrypted on your browser. 
   	 No data will be communicated with any other medium.</small></i>
     <br>
     &nbsp;&nbsp;&nbsp;<h4>Your hidden text:</h4><br>
    <textarea name="msg" id="text">${msg}</textarea>
    
	 </label>
	   
	
</div>
</body>
</html>