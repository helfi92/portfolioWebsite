app.controller('MainController',['$scope','$window', 'IsMobile', '$timeout','$rootScope',function($scope,$window,IsMobile, $timeout,$rootScope){
	
	var mobile_breakpoint;
	

	mobile_breakpoint = 992;
	
	$scope.jumbotron = {
		height: '600px',
		introTextWidth : '50%',
		introTextContentWidth : '60%',
	};
	
	$scope.console = {
		width : '65%',
	}

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	  
	});

	
	angular.element($window).bind("resize", function() {
       
       if($window.innerWidth < 500){
       	$scope.projects.width = '100%';
       	
       } else if($window.innerWidth >= 568 && $window.innerWidth <= mobile_breakpoint){
       	$scope.jumbotron.introTextWidth = '100%';
       	$scope.jumbotron.introTextContentWidth = '80%';
       	$scope.projects.width = '80%';
       	$scope.console.width = '100%';
       	$scope.isMobileScreenWidth = true;

       }else if($window.innerWidth > mobile_breakpoint){
       	$scope.jumbotron.introTextWidth = '50%';
       	$scope.jumbotron.introTextContentWidth = '60%';
       	$scope.projects.width = '460px';
       	$scope.console.width = '65%';
       	$scope.isMobileScreenWidth = false;
       }
       $scope.$apply();  
   	});
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
			overlayText:"Story Time",
			href: 'https://medium.com/@hassanwalcott',
			showOverlay : false,
			backgroundColor: '#ddd',

		},
		
		{
			image:"images/youtube-logo.png",
			overlayText:"Happy Channel",
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

		// {
		// 	description : "Ball Jump is a game designed and developed in Java.",
		// 	image : 'images/appletpic.png',
		// 	href : '#/ballJump',
		// 	target : '_self',
		// },
		
		
		// {
		// 	description : "Motivational video done with Sony Vegas Pro. Received over 1M views!",
		// 	image : 'images/dontgiveup.png',
		// 	href : '#/dontgiveup',
		// 	target : '_self',
		// },
		// {
		// 	description : "Motivational video done with Sony Vegas Pro. Received over 900k views!",
		// 	image : 'images/itspossible.png',
		// 	href : '#/itspossible',
		// 	target : '_self',
		// },
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
	
	$scope.projects.width = "460px";

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
		to_scroll = $("#"+divId).offset().top;
		$('html, body').animate({
        	scrollTop: to_scroll
    	}, 600);	
	};
	

    angular.element($window).bind("scroll", function() {
        var projects_offset,
        	about_offset,
        	social_offset,
        	contact_offset,
        	parachute,
        	box,
        	airplane,
        	hero,
        	water_drop,
        	pedicab,
        	airplane_offset,
        	box_offset;
        
        try{

	        projects_offset = $("#projects").offset().top;
	        social_offset = $("#social").offset().top;
	        contact_offset = $("#contact").offset().top;
	        airplane_offset = $("#airplane").offset().top;
	        box_offset = $("#parachute_box").offset().top;

	        box = document.getElementById("parachute_box");
	        parachute = document.getElementById("parachute");
	        hero = document.getElementById("hero");
	        water_drop = document.getElementById("water_drop");
	        pedicab = document.getElementById("pedicab");
	        airplane = document.getElementById("airplane");


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
		         	box.style.MozTransform = 'rotate('+ 0 +'deg)';
		         	box.style.msTransform = 'rotate('+ 0 +'deg)';
		         	box.style.transform = 'rotate('+ 0 +'deg)';
		         	box.style.webkitTransform = 'rotate('+ 0 +'deg)';		         
		         	box.style.right = "130px";

		        } else if(difference > window.screen.height / 3 && difference < (window.screen.height + landing_offset)){
		     		var offset = airplane_offset - box_offset;
		     		var top = box.style.top;
		     		top  = top.replace("px", "");
		     		var degrees = difference;
		     		diff = difference ;

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

	(function init(){
		
		
		if(IsMobile.isMobile() == true){
			$scope.isMobileScreenWidth = true;
			$scope.projects.width = '100%';
	       	$scope.console.width = '100%';
			$timeout(function(){
				var menuBtn;
				menuBtn = document.getElementById("menuButton");
				document.body.style.fontSize = '12px';
				menuBtn.style.width = '100px';

			},150);
			
		}else{
			if($window.innerWidth <= mobile_breakpoint){
	       		$scope.isMobileScreenWidth = true;
	       }else{
	       		$scope.isMobileScreenWidth = false;

	       }
		}

	}());

    
}]);