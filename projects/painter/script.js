var upperContent = document.querySelector('#upperContent');
var colPick = document.querySelectorAll('.colPick');
var activeColor = 'black';

var lowerContent = document.querySelector('#lowerContent');


var colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'black',
	'white'
];

upperContentInit();
lowerContentInit();

function upperContentInit() {
	for(var i = 0; i < colPick.length; i++) {
		colPick[i].style.backgroundColor = colors[i]

		colPick[i].addEventListener('click', function() {
			activeColor = this.style.backgroundColor;
		});
	}
}

function lowerContentInit() {
	for(var i = 0; i < 29000; i++) {
		var createSquare = document.createElement('DIV');
		createSquare.setAttribute('class', 'square');
		createSquare.style.backgroundColor = 'white';

		lowerContent.appendChild(createSquare);
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
}