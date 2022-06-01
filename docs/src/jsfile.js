let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
let date = document.querySelector("#date");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	// Add your code here
	if (!username.value || !email.value || !password.value)
		console.warn("You must enter some data to submit this form");
	else {
		console.log("======== Form Submission ========");
		console.log("   Username:", username.value);
		console.log("   Email:", email.value);

		if (yes.checked) {
			console.log("   Newsletter: Yes");
		} else if (no.checked) {
			console.log("   Newsletter: No");
		} else {
			console.log("   Newsletter: no submission");
		}

		if (!date.value) {
			console.log("   Date: no submission");
		} else {
			console.log("   Date:", date.value);
		}
	}
}

// let userInput = document.querySelector("#userInput1");
// let copy = document.querySelector("#copy");
// let output = document.querySelector("#output");

// // add an event listener on the target element
// copy.addEventListener("click", handleClick);

// // callback function to handle event
// function handleClick(event) {
// 	output.textContent = userInput.value;
// }
