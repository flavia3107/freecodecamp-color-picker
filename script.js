const selectedColor = document.querySelector('.selected-color');

document.getElementById('colorInput').addEventListener('input', function () {
	refreshColorDetails(this.value);
});

document.querySelector('#generateRandomBtn').addEventListener('click', generateColor);

function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return `rgb(${r}, ${g}, ${b})`;
}

function generateColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	refreshColorDetails(color);
}

function refreshColorDetails(color) {
	document.getElementById('hexValue').textContent = color;
	document.getElementById('rgbValue').textContent = hexToRgb(color);
	document.getElementById('colorInput').value = color;
	selectedColor.style.background = color;
}