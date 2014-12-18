/**
 * 
 */
$(document).ready(function(){
	
	var rsa = forge.pki.rsa;
	var pki = forge.pki;
	
	
	
	$( "#gen" ).click(function() {
		
		
		
		console.log("Enter");
		
		
		var keypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});

		var pem = pki.publicKeyToPem(keypair.publicKey)
		var pem2 = pki.privateKeyToPem(keypair.privateKey);
		
		//convert pki format to forge pub key	
		//var publicKey = pki.publicKeyFromPem(pem);

		//var privateKey = pki.privateKeyFromPem(pem2);
		
		console.log(pem);
		
		
		$("#pub").val(pem);
		$("#priv").val(pem2);
		
	});


}); 