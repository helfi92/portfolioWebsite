app.controller('MainController',['$scope','$window', 'IsMobile', '$timeout','$rootScope',function($scope,$window,IsMobile, $timeout,$rootScope){
		
	$scope.social = [
		{
			image:"images/facebook.png",
			overlayText:"Let's Be Friends",
			href: 'https://www.facebook.com/Hassan.Helfi?fref=ts',
			showOverlay : false,
			backgroundColor: 'rgba(0,0,0,0.8)',
		},
		{
			image:"images/instagram.png",
			overlayText:"A Picture's Worth 1,000 Words",
			href: 'https://instagram.com/helfiwalcott/',
			showOverlay : false,
			backgroundColor: '#125688',
		},
		{
			image:"images/linkedin.png",
			overlayText:"Let's Connect",
			href: 'https://ca.linkedin.com/pub/hassan-ali/8a/246/613',
			showOverlay : false,
			backgroundColor: '#0077B5',
		},
		{
			image:"images/TwitterLogo_white.png",
			overlayText:"Tweet Tweet",
			href: 'https://twitter.com/helfiWalcott',
			showOverlay : false,
			backgroundColor: '#55acee',
		},
		{
			image:"images/medium-logo.png",
			overlayText:"Hello Medium",
			href: 'https://medium.com/@hassanwalcott',
			showOverlay : false,
			backgroundColor: '#ddd',
		},
		
		{
			image:"images/youtube-logo.png",
			overlayText:"MeTube",
			href: 'https://www.youtube.com/user/Helfi92',
			showOverlay : false,
			backgroundColor: '#ddd',
		},
		
	];

	$scope.nav_list = [
		{
			text: 'About',
			href: 'aboutme',
		},	
		{
			text: 'Resume',
			href: 'aboutme',
		},
		{
			text: 'Projects',
			href: 'projects',
		},	
		{
			text: 'Social',
			href: 'social',
		},	
		{
			text: 'Contact',
			href: 'contact',
		},		
	];

	$scope.projects = [
		{
			description : "A web app? A mobile app? Design? Let us know and we'll do it. You like it? Let's discuss a price. 48 hours answer guaranteed. Let us surprise you.",
			image : 'images/imagine-any-logo.png',
			href : 'http://imagineany.com/',
			target : '_self',
		},
		{
			description : "Developed and published an interactive iOS fitness application with Xcode which helps attain weight goals, dissect the amount of fat/muscle in one's body and calculates body mass index.",
			image : 'images/MyFitnessCalWithApple.png',
			href : 'https://itunes.apple.com/ca/app/myfitnesscal/id987945590?mt=8',
			target : '_self',
		},
		{
			description : "Designed and coded a robot in Java capable of navigating a maze full of obstacles (wood blocks), and to reach an optimal position from where it would launch balls towards a pre-specified target.",
			image : 'images/robotCompressed.png',
			href : '#/robot',
			target : '_self',
		},		
		{
			description : "Flappy bird is a game designed and developed using HTML5, CSS Sprites, OOP in Javascript and AngularJS",
			image : 'images/flappy.png',
			href : '#/flappybird',
			target : '_self',
		},
		{
			description : "A digital system design project done with VHDL using the Altera Quartus II software. It was later integrated into a complete user-friendly system, using an FPGA development board.",
			image : 'images/altera.jpg',
			href : 'https://www.dropbox.com/s/hy7hpns6l7f9u8x/musicBoxFinalReport.pdf?dl=0',
			target : '_self',
		},
		{
			description : "diVRse consists of 6 passionate team members wanting to reach out to the rest of the world all with the aim of providing a better future. Virtual Resuscitation is an improved method in teaching CPR.",
			image : 'images/myoProject.jpeg',
			href : 'http://teamdivrse.com',
			target : '_self',
		},
		{
			description : "Evolution of my website",
			image : 'images/my-portfolio.jpg',
			href : '#/evolution',
			target : '_self',
		},
		// {
		// 	description : "HackerCS",
		// 	image : 'images/hackercsLogo.png',
		// 	href : 'http://hackercs.com',
		// 	target : '_self',
		// },
		// {
		// 	description : "CoFindme is available for both iOS and Android, and specializes in the connection of technical cofounders",
		// 	image : 'images/cofindme-logo2.png',
		// 	href : 'https://github.com/helfi92/CoFindme',
		// 	target : '_self',
		// },

	];
	

	//	Navigation Menu
	$scope.toggleMenu = function(){
		var body,
			nav_list,
			nav_parent,
			overlay,
			flag;

		flag = true;
		body = document.body;
		nav_list = document.getElementById("nav-list");
		nav_parent = document.querySelector(".nav-parent");
		overlay = document.querySelector(".overlay");

		$scope.toggleMenu = function(){
			//	Open menu
			if(flag){
				body.style.right = "200px";
				nav_list.style.right = "0";	
				nav_parent.style.right = "200px";
				overlay.style.display = "initial";
				flag = false;
			//	Close menu
			}else{
				body.style.right = "0";
				nav_list.style.right = "-200px";
				nav_parent.style.right = "0px";
				overlay.style.display = "none";	
				flag = true;
			}
		};
		$scope.toggleMenu();
	}

	//	Menu scroll animation
	$scope.scrollTo = function(divId){
		var to_scroll;
		to_scroll = document.getElementById(divId).offsetTop;
		$('html, body').animate({
        	scrollTop: to_scroll
    	}, 600);	
	};

	
	//	Handle animations on scrolling event
	var onScroll = function onScroll(){
		var projects_offset,
        	about_offset,
        	contact_offset,
        	social_offset,
        	parachute,
        	box,
        	airplane,
        	hero,
        	water_drop,
        	pedicab,
        	airplane_offset,
        	box_offset;


    	
		about_offset = document.getElementById("aboutme").offsetTop;
        projects_offset = document.getElementById("projects").offsetTop;
        contact_offset = document.getElementById("contact").offsetTop;
        social_offset = document.getElementById("social").offsetTop;

        box = document.getElementById("parachute_box");
        parachute = document.getElementById("parachute");
        hero = document.getElementById("hero");
        water_drop = document.getElementById("water_drop");
        pedicab = document.getElementById("pedicab");
        airplane = document.getElementById("airplane");

        airplane_offset = projects_offset + airplane.offsetTop;
        box_offset = projects_offset + box.offsetTop;
		
		//	Increase performance by refraining DOM manipulations
		angular.element($window).unbind("scroll", onScroll);
		
		angular.element($window).bind("scroll", function(){
			try{
	     
	        	if(this.pageYOffset < parseInt(projects_offset,10) ){
		    		//	Hero + cloud
					difference = parseInt(window.pageYOffset,10);
			         if (this.pageYOffset > 0){
			             if(difference <= window.screen.width && (difference/1.5 > 50)){
				             difference = difference/1.5 + 'px';
				             hero.style.left = difference;
			             }     
			         } else {
			             hero.style.left = "50px";
			         }

			         //	Water drop
					difference = parseInt(window.pageYOffset,10);
			         if (this.pageYOffset >= 0){
			             if(difference <= window.screen.width){
				             difference = difference/3 + 125 +  'px';
				             water_drop.style.top = difference;
			             }     
			         } else {
			             water_drop.style.left = "110px";
			         }
			  	} else if(this.pageYOffset >= projects_offset && this.pageYOffset < social_offset){
					//	Parachute + box
					difference = parseInt(window.pageYOffset,10) - parseInt(projects_offset,10) ;
					var landing_offset = -140;
				         
			         //	Both move same speed
			         if(difference <= window.screen.height / 3){
			         	diff = difference + 'px';
			         	
			         	parachute.style.top = diff;

			         	diff = difference + 300 + 'px';
			         	box.style.top = diff;
			         	
			         	//	Set rotation to zero
			         	if(box.classList.toString().indexOf("box-move-no-rotation") == - 1){
			         		box.classList.add("box-move-no-rotation");
			         	}


			        } else if(difference > window.screen.height / 3 && difference < (window.screen.height + landing_offset)){
			     		var offset = airplane_offset - box_offset;
			     		var top = box.style.top;
			     		top  = top.replace("px", "");
			     		var degrees = difference;
			     		diff = difference ;

			     		//	Remove rotation of zero
			     		if(box.classList.toString().indexOf("box-move-no-rotation") > - 1){
			         		box.classList.remove("box-move-no-rotation");
			         	}

			     		box.style.top = diff + 300 + 'px';
			            box.style.MozTransform = 'rotate('+ degrees +'deg)';
			         	box.style.msTransform = 'rotate('+ degrees +'deg)';
			         	box.style.transform = 'rotate('+ degrees +'deg)';
			         	box.style.webkitTransform = 'rotate('+ degrees +'deg)';		         
			            airplane.style.right = "80px";	
			        }
					//	Airplane and box motion
			        else{
			         	// To make it work for all browser and to remove discrepencies, we check for the difference in offset
			         	var offset = $("#airplane").offset().top - $("#parachute_box").offset().top;
			         	if(offset < 65){
			             	var boxSpeed = difference - (window.screen.height + landing_offset) + 130; //	130 is the right:130px of starting position
			             	var airplaneSpeed = difference - (window.screen.height + landing_offset) + 80;
			             	
			             	box.style.right = boxSpeed + 'px';
			             	airplane.style.right = airplaneSpeed + 'px';

			         	}   	
			        }
				//	Bridge + pedicab			               			       	        
		    	}else if(this.pageYOffset >= contact_offset - 300){					
					difference = parseInt(window.pageYOffset,10) - parseInt(social_offset,10);
			         if (this.pageYOffset >= social_offset) {
			             difference = (difference) + 'px';		   
			             pedicab.style.left = difference;
			         } else {		            
			             pedicab.style.left = '0px';
			         }
		    	}

	        }catch(e){}
		});            
              	    
	}

    
    angular.element($window).bind("scroll", onScroll);

	(function init(){
		
		
		if(IsMobile.isMobile() == true){
			removeAnimations();
			$timeout(function(){
				var menuBtn;
				menuBtn = document.getElementById("menuButton");
				document.body.style.fontSize = '12px';
				menuBtn.style.width = '100px';

			},150);
			
		}


	}());


	function removeAnimations(){
		var elem_arr;
		elem_arr = document.querySelectorAll(".animation-anchor");

		for(var i = 0 ; i< elem_arr.length; i++){
			elem_arr[i].style.display = "none";
		}
	}

    
}]);