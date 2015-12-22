app.controller('FlappyController',['$scope','SpriteService', function($scope,SpriteService){
	
	
	SpriteService.Sprite.prototype.draw = function(ctx, x , y){
			ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
				x, y, this.width, this.height);
	};
	sprite = SpriteService;

	var
	//game vars
	canvas,
	ctx,
	width,
	height,

	fgpos = 0,
	frames = 0,
	score = 0,
	best = localStorage.getItem("best") || 0,

	//state vars
	currentstate,
	states = {
		Splash : 0,
		Game : 1,
		Score : 2
	},

	//game objects

	//ok btn init in main()
	okbtn,

	bird = {
		x: 60,
		y: 0,

		frame: 0,
		velocity: 0,
		animation : [0,1,2,1], //smooth transition of images from sprites

		rotation: 0,
		radius: 12,

		gravity: 0.25,
		_jump: 4.6,

		jump : function(){
			this.velocity = - this._jump;
		},

		//update sprite animation and position of bird
		update: function(){
			// make sure animation updates and plays faster in gamestate
			var n = currentstate === states.Splash ? 10 : 5;
			this.frame += frames % n === 0 ? 1 : 0;
			this.frame %= this.animation.length;

			// in splash state make bird hover up and down and set
			// rotation to zero
			if (currentstate === states.Splash) {

				this.y = height - 280 + 5*Math.cos(frames/10);
				this.rotation = 0;

			} else { // game and score state //

				this.velocity += this.gravity;
				this.y += this.velocity;

				// change to the score state when bird touches the ground
				if (this.y >= height - s_fg.height-10) {
					this.y = height - s_fg.height-10;
					if (currentstate === states.Game) {
						currentstate = states.Score;
					}
					// sets velocity to jump speed for correct rotation
					this.velocity = this._jump;
				}

				// when bird lack upward momentum increment the rotation
				// angle
				if (this.velocity >= this._jump) {

					this.frame = 1;
					this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);

				} else {

					this.rotation = -0.3;

				}
			}
		},
		draw : function(ctx){
			ctx.save();

			ctx.translate(this.x, this.y);
			ctx.rotate(this.rotation);

			var n = this.animation[this.frame];

			//draw bird with center in origo
			s_bird[n].draw(ctx, -s_bird[n].width/2, -s_bird[n].height/2);

			ctx.restore();
		}

	};
	pipes = {

		_pipes: [],
		// padding: 80, // TODO: Implement paddle variable

		/**
		 * Empty pipes array
		 */
		reset: function() {
			this._pipes = [];
		},

		/**
		 * Create, push and update all pipes in pipe array
		 */
		update: function() {
			// add new pipe each 100 frames
			if (frames % 100 === 0) {
				// calculate y position
				var _y = height - (s_pipeSouth.height+s_fg.height+120+200*Math.random());
				// create and push pipe to array
				this._pipes.push({
					x: 500,
					y: _y,
					width: s_pipeSouth.width,
					height: s_pipeSouth.height
				});
			}
			for (var i = 0, len = this._pipes.length; i < len; i++) {
				var p = this._pipes[i];

				if (i === 0) {

					score += p.x === bird.x ? 1 : 0;

					// collision check, calculates x/y difference and
					// use normal vector length calculation to determine
					// intersection
					var cx  = Math.min(Math.max(bird.x, p.x), p.x+p.width);
					var cy1 = Math.min(Math.max(bird.y, p.y), p.y+p.height);
					var cy2 = Math.min(Math.max(bird.y, p.y+p.height+80), p.y+2*p.height+80);
					// closest difference
					var dx  = bird.x - cx;
					var dy1 = bird.y - cy1;
					var dy2 = bird.y - cy2;
					// vector length
					var d1 = dx*dx + dy1*dy1;
					var d2 = dx*dx + dy2*dy2;
					var r = bird.radius*bird.radius;
					// determine intersection
					if (r > d1 || r > d2) {
						currentstate = states.Score;
					}
				}
				// move pipe and remove if outside of canvas
				p.x -= 2;
				if (p.x < -p.width) {
					this._pipes.splice(i, 1);
					i--;
					len--;
				}
			}
		},

		/**
		 * Draw all pipes to canvas context.
		 * 
		 * @param  {CanvasRenderingContext2D} ctx the context used for
		 *                                        drawing
		 */
		draw: function(ctx) {
			for (var i = 0, len = this._pipes.length; i < len; i++) {
				var p = this._pipes[i];
				s_pipeSouth.draw(ctx, p.x, p.y);
				s_pipeNorth.draw(ctx, p.x, p.y+80+p.height);
			}
		}
	};
	function onpress(evt) {

		switch (currentstate) {

			// change state and update bird velocity
			case states.Splash:
				currentstate = states.Game;
				bird.jump();
				break;

			// update bird velocity
			case states.Game:
				bird.jump();
				break;

			// change state if event within okbtn bounding box
			case states.Score:
				// get event position
				var mx = evt.offsetX, my = evt.offsetY;

				if (mx == null || my == null) {
					mx = evt.touches[0].clientX;
					my = evt.touches[0].clientY;
				}

				// check if within
				if (okbtn.x < mx && mx < okbtn.x + okbtn.width &&
					okbtn.y < my && my < okbtn.y + okbtn.height
				) {
					pipes.reset();
					currentstate = states.Splash;
					score = 0;
				}
				break;

		}
	}

	//start and init game
	function main() {
		// get canvas and set width/height
		canvas = document.getElementById("flappy-canvas");

		width = window.innerWidth;
		height = window.innerHeight;

		var evt = "touchstart";
		if (width >= 500) {
			width  = 320;
			height = 480;
			canvas.style.border = "1px solid #000";
			evt = "mousedown";
		}

		// listen for input event
		document.addEventListener(evt, onpress);

		canvas.width = width;
		canvas.height = height;
		if (!(!!canvas.getContext && canvas.getContext("2d"))) {
			alert("Your browser doesn't support HTML5, please update to latest version");
		}
		ctx = canvas.getContext("2d");

		currentstate = states.Splash;
		// append canvas to document
		document.body.appendChild(canvas);

		// initate graphics and okbtn
		var img = new Image();
		img.onload = function() {
			sprite.initSprites(img);
			ctx.fillStyle = s_bg.color;

			okbtn = {
				x: (width - s_buttons.Ok.width)/2,
				y: height - 200,
				width: s_buttons.Ok.width,
				height: s_buttons.Ok.height
			}

			run();
		}
		img.src = "images/sheet.png";
	}
	//start and update game loop
	function run() {
		var loop = function() {
			update();
			render();
			window.requestAnimationFrame(loop, canvas);
		}
		window.requestAnimationFrame(loop, canvas);
	}

	//update foreground,pipe and bird
	function update() {
		frames++;

		if (currentstate !== states.Score) {
			fgpos = (fgpos - 2) % 14;
		} else {
			// set best score to maximum score
			best = Math.max(best, score);
			localStorage.setItem("best", best);
		}
		if (currentstate === states.Game) {
			pipes.update();
		}

		bird.update();
	}	

	function render(){
		ctx.fillRect(0, 0, width, height);
		// draw background sprites
		s_bg.draw(ctx, 0, height - s_bg.height);
		s_bg.draw(ctx, s_bg.width, height - s_bg.height);

		pipes.draw(ctx);
		bird.draw(ctx);

		// draw forground sprites
		s_fg.draw(ctx, fgpos, height - s_fg.height);
		s_fg.draw(ctx, fgpos+s_fg.width, height - s_fg.height);

		var width2 = width/2; // center of canvas

		if (currentstate === states.Splash) {
			// draw splash text and sprite to canvas
			s_splash.draw(ctx, width2 - s_splash.width/2, height - 300);
			s_text.GetReady.draw(ctx, width2 - s_text.GetReady.width/2, height-380);

		}
		if (currentstate === states.Score) {
			// draw gameover text and score board
			s_text.GameOver.draw(ctx, width2 - s_text.GameOver.width/2, height-400);
			s_score.draw(ctx, width2 - s_score.width/2, height-340);
			s_buttons.Ok.draw(ctx, okbtn.x, okbtn.y);
			// draw score and best inside the score board
			s_numberS.draw(ctx, width2-47, height-304, score, null, 10);
			s_numberS.draw(ctx, width2-47, height-262, best, null, 10);

		} else {
			// draw score to top of canvas
			s_numberB.draw(ctx, null, 20, score, width2);

		}
	}


	main();


}]);
