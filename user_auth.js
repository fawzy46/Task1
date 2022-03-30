 function login()
 {
	const username = document.getElementById("user");
	const password = document.getElementById("Password");
	if (username.value === "fawzy" && password.value === "fawzy") {
        alert("You have successfully logged in.");
        window.location.replace("movies.html");
    } 
	else {
        alert("user and/or Password are not correct");
    } 
 }