function swapImage() {
	document.getElementById("foo").src = "images/lavash.jpg";
	document.getElementById("caption").innerText = "The lavash is heating up.";
}

function unswapImage() {
	document.getElementById("foo").src = "images/shashlik.jpg";
	document.getElementById("caption").innerText = "The shashlik is grilling.";
}

