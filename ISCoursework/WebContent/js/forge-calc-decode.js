/**
 * 
 */
$(document).ready(function(){
	
	
	
	
	console.log("heloo")
	
	
	$( "#decrypt" ).click(function() {

		var text = $( "#text" ).val();
		var pem = $( "#privateKey" ).val();
		
		var rsa = forge.pki.rsa;
		var pki = forge.pki;
		
		

		//var keypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});

		//var pem = pki.publicKeyToPem(keypair.publicKey)
		//var pem2 = pki.privateKeyToPem(keypair.privateKey);
		
		
		//convert pki format to forge pub key
		
		var privateKey = pki.privateKeyFromPem(pem);
		
		
		console.log(text);
		//console.log(pem);
		
		//console.log(pem2);
		
		
		
		var input = forge.util.decode64(text);
		console.log(input);
		
		
		//Seperate crypted text and rsa encrypted key
		var str = input;
		var res = str.split("@@@");
		console.log(res);
		
		var cryptedText = 0;
		var rsaCryptedKey = 0;
		
		$.each(res, function( index, value ) {
			  
				//get text
				if(index==0)
					{
					cryptedText = value;
					}
				if(index==1)
					{
					rsaCryptedKey = value;
					}
			
			});
		
		console.log(cryptedText);
		console.log("rsa crypted key-  "+rsaCryptedKey);
		
		//decrypt the key
		var decryptedKeyIv = privateKey.decrypt(rsaCryptedKey);
		
		//split key and iv
		var key;
		var iv;
		var keyIvArray = decryptedKeyIv.split("####");
		$.each(keyIvArray, function( index, value ) {
			  
			//get text
			if(index==0)
				{
				key = value;
				}
			if(index==1)
				{
				iv = value;
				}
		
		});
		console.log(key);
		console.log(iv);
		
		//strt the AES decryption process to get text
		var bytes = forge.util.hexToBytes(cryptedText);
		var buffer = forge.util.createBuffer();
		// put bytes into the buffer
		buffer.putBytes(bytes);
		
		var decipher = forge.cipher.createDecipher('AES-CBC', key);
		decipher.start({iv: iv});
		decipher.update(buffer);
		decipher.finish();
		// outputs decrypted hex
		console.log(decipher.output.toString());
		
		
		$( "#text" ).val(decipher.output.toString());
		
		
		
		
		
		
		
//		var input = forge.util.decode64(text);
//		console.log(input);
//		
//		var decrypted = privateKey.decrypt(input);
//		
//		$( "#text" ).val(decrypted);
		
		// decrypt data with a private key (defaults to RSAES PKCS#1 v1.5)
		//var decrypted = keypair.privateKey.decrypt(encrypted);
		
		//console.log(decrypted);
		
		
		
		
		
		});
	
	
	
	
	
	
}); 