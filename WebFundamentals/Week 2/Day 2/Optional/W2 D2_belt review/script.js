// console.log("linked !!!");

// clicking on join will Remove the Join Button
function remove(element) {
	element.remove();
	// document.querySelector("#removeMe").remove();
}
// increase the total count of votes
function upVote(elementNumber) {
	if (elementNumber == 1) {
		document.querySelector("#vote1").innerHTML++;
	} else {
		document.querySelector("#vote2").innerHTML++;
	}
}
// when a user clicks the GO button show an alert message with the value in the text input

function alertMe() {
	var inputElement = document.querySelector("#searchInput");
	alert(`You Searched For: ${inputElement.value}`);
}

// login // logout
function changeButton(element) {
	if (element.innerText === "Log in") {
		element.innerText = "logout";
	} else {
		element.innerText = "Log in";
	}
}