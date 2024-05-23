function checkNumber(input){
	var pwd=/^(?=.*[0-9])/;
	if(input.value.match(pwd))
		return true;
	return false;
}

function checkName(input){
	var name=/^[^a-Z]$/; 
	if(input.value.match(name))
		return true;
	return false;
}


function validate(obj)
{
	var valid = true;
	
	var name=document.getElementsByName("nome")[0];
	if(!checkName(name)){
		valid=false;
		alert('Campo NOME non corretto!');
		name.classList.add("error");
	}else
		name.classList.remove("error");
	

	var cognome=document.getElementsByName("number")[0];
	if(!checkNumber(cognome)){
		valid=false;
		alert('Campo Spese o Prezzo di spedizione non corretto!');
		cognome.classList.add("error");
	}else
		cognome.classList.remove("error");


	
	return valid;
}


