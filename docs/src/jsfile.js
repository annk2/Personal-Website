let form = document.querySelector("form"); //need?
let formElem = document.querySelectorAll(".form-element");
let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let confirmName = document.querySelector("#confirm-name");
let confirmEmail = document.querySelector("#confirm-email");
let confirmMessage = document.querySelector("#confirm-message");
let confirm = document.querySelector("#confirm");
let confirmation = document.querySelector(".confirmation");
// let submit = document.querySelector("#submit");
// let password = document.querySelector("#password");
// let date = document.querySelector("#date");

confirm.addEventListener("click", handleClick);
confirmation.addEventListener("click", handleSubmitClick);

function handleClick(event) {
	// if (!fullName.value || !email.value || !message.value) {
	// 	const warning = document.createElement("div");
	// 	warning.class = "alert alert-warning";
	// 	warning.setAttribute("role", "alert");
	// 	warning.textContent = "You must fill out all fields before submitting.";
	// 	form.append(warning);
	// 	return;
	// }

	formElem.forEach((element) => {
		element.style.display = "none";
	});

	const SubmitBtn = document.createElement("INPUT");
	SubmitBtn.className = "btn btn-primary";
	SubmitBtn.setAttribute("type", "submit");
	SubmitBtn.value = "Submit";

	confirmName.textContent = `Name: ${fullName.value}`;
	confirmEmail.textContent = `Email: ${email.value}`;
	confirmMessage.textContent = `Message: ${message.value}`;

	confirmation.append(SubmitBtn);
}

function handleSubmitClick(event) {
	confirmation.style.display = "none";
	// confirmName.style.display = "none";
	// confirmEmail.style.display = "none";
	// confirmMessage.style.display = "none";

	const thanks = document.createElement("div");
	thanks.textContent =
		"Thank you for contacting Anna. She looks forward to reading your message!";
	thanks.className = "fs-4";

	form.append(thanks);
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
