var content = document.getElementById("content");
var links = content.getElementsByClassName("workToggle"); 

// Open & Close work on click


for (let link of links) {
	link.onclick = function() {
		console.log(link);
		var list = link.querySelector('ul');
		// If item isn't active
		if (list.classList.contains("active")) {
			// Remove Active class
			list.className -= "active";
		} else {
			// Find ul item and add .active
			list.className += " active";
		}
	}
}