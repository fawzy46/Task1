 function login()
 {
	const username = document.getElementById("user");
	const password = document.getElementById("Password");
	const err = document.getElementById("error-box");
	if (username.value === "fawzy" && password.value === "fawzy") {
		if(err.style.display === "flex")
		{
			err.style.display = "none";
		}
        alert("You have successfully logged in.");
        window.location.href = "movies.html";
    } 
	else {
		err.style.display = "flex";
    } 
 }