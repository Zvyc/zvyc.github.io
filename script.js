var container = document.querySelector('#container');
var colorPickSquares = document.querySelectorAll('.colorPickSquare');
var checkbox = document.querySelector('input');
var createSquare;
var activeColor = 'black';

var colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'black'
];

for(var i = 0; i < colorPickSquares.length; i++) {
	colorPickSquares[i].style.backgroundColor = colors[i]

	colorPickSquares[i].addEventListener('click', function() {
		activeColor = this.style.backgroundColor;
	});
}

for(var i = 0; i < 29000; i++) {
	var createSquare = document.createElement('DIV');
	createSquare.setAttribute('class', 'square');
	createSquare.style.backgroundColor = 'white';

	container.appendChild(createSquare);
}

var squares = document.querySelectorAll('.square');

for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('mouseover', function(evt) {
		if(evt.buttons == 1) {
			this.style.backgroundColor = activeColor;
		}
	});
	squares[i].addEventListener('click', function(evt) {
		this.style.backgroundColor = activeColor;
	});
}

checkbox.addEventListener('click', function() {
	if(checkbox.checked == true) {
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = activeColor;
		}
	}
});
	