const imgs = {
	cards: {
		path: 'assets/PNG/Cards/',
		ext: 'png',
		back: {
			blue: 'cardBack_blue5',
			red: 'cardBack_red5',
		},
		get: function(suit, value){
			return `${this.path}card${suit}${value}.${this.ext}`;
		},
	},
	chips: {
		path: 'assets/PNG/Chips/',
		ext: 'png',
		black: {
			main: 'chipBlackWhite',
			side: 'chipBlackWhite_side'
		},
		blue: {
			main: 'chipBlueWhite',
			side: 'chipBlueWhite_side'
		},
		green: {
			main: 'chipGreenWhite',
			side: 'chipGreenWhite_side'
		},
		red: {
			main: 'chipRedWhite',
			side: 'chipRedWhite_side'
		},
		white: {
			main: 'chipWhiteBlue',
			side: 'chipWhiteBlue_side'
		},
		get: function(color, type = 'main'){
			return `${this.path}${this[color][type]}.${this.ext}`;
		}
	}
};

const deckNumber = 6;
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const messages = {
	bet: 'Apuesta !',
	win: 'Ganas !',
	draw: 'Empate !',
	lose: 'Croupier gana',
	warning: {
		bet: {msg: 'Tienes que apostar primero', x: 750},
		insurance: {msg: 'No puedes usar un seguro', x: 725},
		insured: {msg:'seguro utilizado !', x: 800},
		double: {msg: 'No puedes doblar ahora', x: 725},
		funds: {msg: "No tienes fondos suficientes", x: 680},
		hit: {msg: 'Ya no puedes pegar', x: 720},
		doubled: {msg: 'Apuesta duplicada !', x: 800},
		giveUp: {msg: 'No puedes rendirte ahora !', x: 720},
		gaveUp: {msg: 'Te rendiste', x: 800}
	},
};

const width = 1085;
const height = 650;

createjs.Text.prototype.center = function(x = true, y = false){
	var bounds = this.getBounds();
	if(x) this.x = (width / 2) - (bounds.width / 2);
	if(y) this.y = (height / 2) - (bounds.height / 2);
};

function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function l(v){
	console.log(v);
}

function t(v){
	console.table(v);
}
