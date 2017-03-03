
 
  function afficher(id_div) {
  $(id_div).toggle();
  }

function validation() {	  
  var contenu_email = $('#courriel').val();  
  var contenu_num = $('#telephone').val(); 
     valider_telephone(contenu_num);
     valider_email(contenu_email);
	  }
	   
	  function valider_email(email){
		  if(email.incules('@')== false)
		  alert("email non valide");
	  }
	  function valider_telephone(num){
      var valide= /^0[1-6]\d{8}$/;
		  if(valide.test(num)==false)
		  window.alert("votre telephone doit contenir des numero");
		  if (num.length != 10 )
		  alert("téléphone non valide");
	  }