app.controller('MainController',['$scope','$window', 'IsMobile', '$timeout','$rootScope',function($scope,$window,IsMobile, $timeout,$rootScope){
	
	if($window.innerHeight < 568 || ( !!!IsMobile.isMobile() && $window.innerWidth < 350)){
	   	$scope.showHassanPicture = false;
	}else{
	   	$scope.showHassanPicture = true;
	}


	$scope.introText = "I am fueled by the challenge of conquering the latest advances in programming and 	technology. My goal is to create code that is clean, functional, and always up to web standards.";
	$scope.jumbotron = {
		height: '600px',
		introTextWidth : '50%',
		introTextContentWidth : '60%',
		introTextContentTop : '25%',
		image:'images/my-picture.png',
	};
	$scope.console = {
		width : '65%',
	}

	angular.element($window).bind("resize", function() {
       if($window.innerHeight < 568 || ( !!!IsMobile.isMobile() && $window.innerWidth < 350)){
       	$scope.showHassanPicture = false;
       }else{
       	$scope.showHassanPicture = true;
       }

       if($window.screen.width < 568){
       	$scope.projects.width = '100%';
       	
       }
       if($window.innerWidth >= 568 && $window.innerWidth <= 992){
       	$scope.contact.height = '600px';
       	$scope.jumbotron.introTextWidth = '100%';
       	$scope.jumbotron.introTextContentWidth = '80%';
       	$scope.jumbotron.introTextContentTop = '15%';
       	$scope.jumbotron.image = 'images/my-picture.png';
       	$scope.projects.width = '80%';
       	$scope.console.width = '100%';
       	$scope.isMobileScreenWidth = true;
       }else if($window.innerWidth > 992){
       	$scope.contact.height = '1000px';
       	$scope.jumbotron.introTextWidth = '50%';
       	$scope.jumbotron.introTextContentWidth = '60%';
       	$scope.jumbotron.introTextContentTop = '25%';
       	$scope.jumbotron.image = 'images/my-picture.png';
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

		},
		{
			image:"images/instagram.png",
			overlayText:"A Picture's Worth 1,000 Words",
			href: 'https://instagram.com/helfiwalcott/',
			showOverlay : false,


		},
		{
			image:"images/linkedin.png",
			overlayText:"Let's Connect",
			href: 'https://ca.linkedin.com/pub/hassan-ali/8a/246/613',
			showOverlay : false,

		},
		{
			image:"images/twitter-icon.png",
			overlayText:"Tweet Tweet",
			href: 'https://twitter.com/helfiWalcott',
			showOverlay : false,

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
			image : 'images/imagineany.png',
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
			description : "The Cricket Bot is an autonomous robot built with the Lego Mindstorms kit by a team of 6 students at McGillThe challenge was to build an autonomous robot navigating a maze full of obstacles (wood blocks), and to reach an optimal position fromwhere it would launch balls towards a pre-specified target.",
			image : 'images/robotCompressed.png',
			href : '#/robot',
			target : '_self',
		},

		{
			description : "Evolution of my website",
			image : 'images/my-portfolio.jpg',
			href : '#/evolution',
			target : '_self',
		},
		{
			description : "Flappy bird is a game designed and developed using HTML5, CSS sprites, OOP in Javascript and AngularJS",
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
		
		
		{
			description : "Motivational video done with Sony Vegas Pro. Received over 1M views!",
			image : 'images/dontgiveup.png',
			href : '#/dontgiveup',
			target : '_self',
		},
		{
			description : "Motivational video done with Sony Vegas Pro. Received over 900k views!",
			image : 'images/itspossible.png',
			href : '#/itspossible',
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

	];
	$scope.projects.width = "460px";

	$scope.contact = {
		height : '1000px',
	}


	$scope.overlayShowHide = function(item){
		return item.showOverlay = !item.showOverlay;

	};
	$scope.toggled = false;
	$scope.myCssVar = '';
	$scope.overlayCSS = '';
	$scope.menuBarAnimate = function(){
		//$("#nav-list").toggleClass("actives");
		$("#nav-toggle").toggleClass("actives");

		//$("#overlay").toggleClass("css-class");
		if($scope.toggled) {
			$scope.myCssVar = '';
			$scope.overlayCSS = '';


		} else {
			$scope.myCssVar = 'css-navList';
			$scope.overlayCSS = 'css-overlay';

		}
		$scope.toggled = !$scope.toggled;

	};
	
	$scope.scrollTo = function(divId){
		var toScroll = $("#"+divId).offset().top - 75;
		$('html, body').animate({
        scrollTop: toScroll
    	}, 600);
		
	};
	$scope.application = {
		mobileBreakPoint : 992,
	}
	$scope.resizeCallback = function(){
		

		if($window.innerWidth <= $scope.application.mobileBreakPoint){
       	$scope.isMobileScreenWidth = true;
       	$scope.jumbotron.introTextWidth = '100%';
       	$scope.jumbotron.introTextContentWidth = '80%',
       	$scope.jumbotron.introTextContentTop = '15%';
       	$scope.jumbotron.image = 'images/my-picture.png'
       }else{
       	$scope.isMobileScreenWidth = false;
       	$scope.jumbotron.introTextWidth = '50%';
       	$scope.jumbotron.introTextContentWidth = '60%';
       	$scope.jumbotron.introTextContentTop = '25%';
       	$scope.jumbotron.image = 'images/my-picture.png'
       }
       
	};

	$scope.navigationBar = {
		height : "75",
	}

    angular.element($window).bind("scroll", function() {
        try{	
			//hero + cloud
			difference = parseInt(window.pageYOffset,10); //- parseInt($("#threeCircles").offset().top,10);
	         if (this.pageYOffset >= 0){//$("#threeCircles").offset().top) {
	             if(difference <= window.screen.width){
		             difference = difference/1.5 + 'px';
		             $("#heroImage").css('left',difference);	
	             }     
	         } else {
	             $("#heroImage").css('left','0px');
	         }
	     }catch(err){}
        
    });
    angular.element($window).bind("scroll", function() {
        try {
			//water drop
			difference = parseInt(window.pageYOffset,10); //- parseInt($("#threeCircles").offset().top,10);
	         if (this.pageYOffset >= 0){//$("#threeCircles").offset().top) {
	             if(difference <= window.screen.width){
		             difference = difference/3 + 70 +  'px';
		             $("#water_drop").css('top',difference);	
	             }     
	         } else {
	             $("#water_drop").css('left','70px');
	         }
		}
		catch(err) {}
		
        

    });

    
    angular.element($window).bind("scroll", function() {
        try {
			//bridge + pedicab
			difference = parseInt(window.pageYOffset,10) - parseInt($("#social").offset().top,10);
	         if (this.pageYOffset >= $("#social").offset().top) {
		             difference = difference/2 + 'px';
		             $("#pedicab").css('left',difference);    
	         } else {
	             $("#pedicab").css('left','0px');
	         }
        }catch(err){}

    });

	angular.element($window).bind("scroll", function() {
        try{
			//parachute + box
			difference = parseInt(window.pageYOffset,10) - parseInt($("#projects").offset().top,10) ;
	         if (this.pageYOffset >= $("#projects").offset().top) {
	             if(difference <= window.screen.width){
		             degrees = difference;
		             difference = difference/2 + 300 + 'px';

		             $("#parachute_box").css('top',difference);
		             $("#parachute_box").css({
		             	'-webkit-transform' : 'rotate('+ degrees +'deg)',
		                 '-moz-transform' : 'rotate('+ degrees +'deg)',
		                 '-ms-transform' : 'rotate('+ degrees +'deg)',
		                 'transform' : 'rotate('+ degrees +'deg)'
		             });	

	             }     
	         } else {
	             $("#parachute_box").css('top','300px');
	         }
        }catch(err){}
        
    });
    if(IsMobile.isMobile()){
		$scope.isMobileScreenWidth = true;
		$scope.projects.width = '100%';
       	$scope.console.width = '100%';
       	$scope.contact.height = '450px';
		$timeout(function(){
			angular.element("body").css('font-size', '12px');
			angular.element(".openQuotationIntroText img").css("height","3%");
			angular.element(".closeQuotationIntroText img ").css("height","3%");
			angular.element("h4").css('font-size', '12px');
			angular.element("#menuButton").css('width','100px');
		},150);
	}else{
		if($window.innerWidth <= $scope.application.mobileBreakPoint){
       		$scope.isMobileScreenWidth = true;
       		$scope.contact.height = '600px';
       }else{
       		$scope.isMobileScreenWidth = false;

       }
	}
}]);