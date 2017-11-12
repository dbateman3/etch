const container = document.querySelector('.container');


for (i = 0; i < 256; i++) {
	let gridBox = document.createElement("div");
	gridBox.classList.add("gridBox");
	container.appendChild(gridBox);	

}

const gridBoxes = document.querySelectorAll('.gridBox');

gridBoxes.forEach(function(box) {
	box.addEventListener('mouseover', (e) => {
		box.classList.add("gridBoxHover");
	});
});

const button = document.querySelector('.reset');
button.addEventListener('click', (e) => {
	gridBoxes.forEach(function(box) {
		box.classList.remove("gridBoxHover");
	});
});