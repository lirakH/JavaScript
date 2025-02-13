console.log("hello");


function validation() {
	
	document.getElementById("name_error").style.visibility = "hidden";
	document.getElementById("name").style.borderColor = "black";
	document.getElementById("age_error").style.visibility = "hidden";
	document.getElementById("age").style.borderColor = "black";

	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;

	var valid_name_regex = /^[A-z]+$/;
	var valid_age_regex = /^[0-9]+$/;

	if (name.match(valid_name_regex) && age.match(valid_age_regex) ) {

		return true;

	}else{

		if ( !(name.match(valid_name_regex)) ) {
		
			document.getElementById("name_error").style.visibility = "visible";
			document.getElementById("name").style.borderColor = "red";

		}
		if ( !(age.match(valid_age_regex)) ) {

			document.getElementById("age_error").style.visibility = "visible";
			document.getElementById("age").style.borderColor = "red";

		}
		return false;
	}
}