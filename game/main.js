var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-dfa', {preload: preload,
create: create, update: update, render: render});

var style = { font: "12px Arial", fill: "#000000" };

/*CurrX/CurrY: Current x and y positions of mouse in terms of the grid for replacing
gray squares after orange selector cursor

fps crashses when replacing the whole board but better practice
anyways to just replace the one square

*/
var currX = 0;
var currY = 0;
var pastX = 0;
var pastY = 0;
var keys;
var ismbDown = false;

/*Library and helper functions*/
function createEventListeners() {
	game.input.mouse.capture = true;
	game.input.onDown.add(onDown, this);
	game.input.onUp.add(onUp, this);

}

function onDown(pointer) {
}

function onUp() {
	isDown = false;
}

/*PhaserJS main functions*/
function preload() {
	this.load.image('background','assets/background.jpg');
	this.load.image('greensqr', 'assets/greensqr.png');
	this.load.image('bluesqr', 'assets/bluesqr.png');
	this.load.image('orangesqr', 'assets/orangesqr.png');
	this.load.image('sector', 'assets/gridcomp.png');
}

function create() {
		
	//this.greensqr.anchor.setTo(0.5, 0.5);
	this.background = this.game.add.sprite(0, 0, 'background');

	this.text = game.add.text(34,10,"State Machine Creator",style);
	this.text = game.add.text(7,44,"Left click on a square to add a state",style);
	this.text = game.add.text(7,55,"\nLeft click on created state\nand select \"create edge\"\nto connect states",style);
	//this.game.time.advancedTiming = true;
	var xinc = 0;
	var yinc = 0;
	for(yinc = 0; yinc < 13; yinc++)
	{
		
		for(xinc = 0; xinc < 13; xinc++){
			this.sector = this.game.add.sprite(200+xinc*80,yinc*80,'sector');
		}
		
	}
}

function update() {
	this.text = game.add.text(7,600,"FPS: " + game.time.fps,style);
	
	//Get the mouse position
	var pos = this.game.input.activePointer.position;
	currX = 200 + Math.floor((pos.x-200)/80);
	currY = Math.floor(pos.y/80);
	
	if((currX != pastX) || (currY != pastY))
	{
		selector = this.game.add.sprite(200+pastX*80,pastY*80, 'sector');
	}
	
	pastX = currX;
	pastY = currY;
	
	//Check if the mouse has left the current square
	//So that we only need to draw that one
	//Drawing the whole board on every frame obliterates the browser
	this.game.debug.text("x:" + pos.x + " y:" + pos.y, 55, 500);
	this.game.debug.text(this.game.time.fps,55,600);
	if(pos.x >= 200)
	{
		selector = this.game.add.sprite(200+Math.floor((pos.x-200)/80)*80+5,Math.floor(pos.y/80)*80+5,'orangesqr');
	}
}

function render() {

}