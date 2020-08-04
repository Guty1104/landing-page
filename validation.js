const form = document.querySelector("#Info")
const email = document.querySelector("#Email")
const password = document.querySelector("#Password")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit" , (event) => {
	event.preventDefault ()
	if (email.value == "" || password.value== "" ) {
		if (email.value == "") {
		emailHelp.innerText = "Por favor, completar esta información!"

		}
		if (password.value == "") {
		passwordHelp.innerText = "Por favor, completar esta información!"

		}

	} else	{
		form.submit () ;
		

	}



})