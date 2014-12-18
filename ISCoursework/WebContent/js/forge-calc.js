/**
 * 
 */
$(document).ready(function(){
	
	
	
	
	console.log("heloo")
	
	
	$( "#encrypt" ).click(function() {

		var text = $( "#text2hide" ).val();
		var pem = $( "#publicKey" ).val();
		
		var rsa = forge.pki.rsa;
		var pki = forge.pki;
		
		

		//var keypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});

		//var pem = pki.publicKeyToPem(keypair.publicKey)
		//var pem2 = pki.privateKeyToPem(keypair.privateKey);
		
		
		//convert pki format to forge pub key
		
		var publicKey = pki.publicKeyFromPem(pem);
		
		//remv
		//var privateKey = pki.privateKeyFromPem(pem2);
		
		console.log(text);
		console.log(pem);
		//console.log(pem2);
		
		//console.log(pem2);
		
		
		
		var key = forge.random.getBytesSync(32);
		var iv = forge.random.getBytesSync(32);
		
		var cipher = forge.cipher.createCipher('AES-CBC', key);
		cipher.start({iv: iv});
		cipher.update(forge.util.createBuffer(text));
		cipher.finish();
		var encryptedTxt = cipher.output.toHex();
		
		// outputs encrypted hex
		
//		var bytes = forge.util.hexToBytes(encrypted.toHex());
//		var buffer = forge.util.createBuffer();
//		// put bytes into the buffer
//		buffer.putBytes(bytes);
		
		console.log(encryptedTxt);
//		console.log(buffer);
		
//		var decipher = forge.cipher.createDecipher('AES-CBC', key);
//		decipher.start({iv: iv});
//		decipher.update(buffer);
//		decipher.finish();
//		// outputs decrypted hex
//		console.log(decipher.output.toString());
		
		var keyiv = key+"####"+iv; 
		console.log("keyiv----  "+keyiv);
//		var ky = forge.util.encode64(keyiv);
		
//		console.log(ky);
		
//		var ky1 = forge.util.decode64(ky);	
//		console.log(ky1);
		
		var encryptedKey = publicKey.encrypt(keyiv);
		
		//RSA encrypted key
		console.log(encryptedKey);
		
		//concat key to end of AES encrypted text
		var cryptedMsg = encryptedTxt + "@@@" + encryptedKey;
		
		console.log("Final msg=  "+cryptedMsg);
		
		var er = forge.util.encode64(cryptedMsg);
		
		//set textarea value to encrypted text
		$( "#text2hide" ).val(er);
		
		
		
		
		
		console.log("~~~~~~~Decoding");
		
//		
//		
//		
//		
//		// decrypt data with a private key (defaults to RSAES PKCS#1 v1.5)
//		//var decrypted = keypair.privateKey.decrypt(encrypted);
//		
//		//console.log(decrypted);
//		
//		
//		var en = $( "#text2hide" ).val();
//		
//		var input = forge.util.decode64(en);
//		console.log(input);
//		
//		
//		//Seperate crypted text and rsa encrypted key
//		var str = input;
//		var res = str.split("@@@");
//		console.log(res);
//		
//		var cryptedText = 0;
//		var rsaCryptedKey = 0;
//		
//		$.each(res, function( index, value ) {
//			  
//				//get text
//				if(index==0)
//					{
//					cryptedText = value;
//					}
//				if(index==1)
//					{
//					rsaCryptedKey = value;
//					}
//			
//			});
//		
//		console.log(cryptedText);
//		console.log("rsa crypted key-  "+rsaCryptedKey);
//		
//		//decrypt the key
//		var decryptedKeyIv = privateKey.decrypt(rsaCryptedKey);
//		
//		//split key and iv
//		var keyy;
//		var ivv;
//		var keyIvArray = decryptedKeyIv.split("####");
//		$.each(keyIvArray, function( index, value ) {
//			  
//			//get text
//			if(index==0)
//				{
//				keyy = value;
//				}
//			if(index==1)
//				{
//				ivv = value;
//				}
//		
//		});
//		console.log(keyy);
//		console.log(ivv);
		
		
		//remv
		//var decrypted = privateKey.decrypt(input);
		//console.log("decrypted--- "+decrypted);
		
		//console.log(encrypted.length);
		
		//remv
		//var en = $( "#text2hide" ).val();
		
		//console.log(en.length);
		});
	
	
	
	
	
	
}); 