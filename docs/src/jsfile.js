let form = document.querySelector("form");
let formElem = document.querySelectorAll(".form-element");
let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let confirmName = document.querySelector("#confirm-name");
let confirmEmail = document.querySelector("#confirm-email");
let confirmMessage = document.querySelector("#confirm-message");
let confirm = document.querySelector("#confirm");
let confirmation = document.querySelector(".confirmation");

confirm.addEventListener("click", handleClick);
confirmation.addEventListener("click", handleSubmit);

function handleClick(event) {
	formElem.forEach((element) => {
		element.style.display = "none";
	});

	const SubmitBtn = document.createElement("INPUT");
	SubmitBtn.className = "btn btn-primary";
	SubmitBtn.value = "Submit";

	confirmName.textContent = `Name: ${fullName.value}`;
	confirmEmail.textContent = `Email: ${email.value}`;
	confirmMessage.textContent = `Message: ${message.value}`;

	confirmation.append(SubmitBtn);
}

function handleSubmit(event) {
	confirmation.style.display = "none";

	const thanks = document.createElement("div");
	thanks.textContent =
		"Thank you for contacting Anna. She looks forward to reading your message!";
	thanks.className = "fs-4";

	form.append(thanks);
}
