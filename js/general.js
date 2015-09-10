

$( window ).unload(function() {
	$("#contactPage").hide("");
	$("#projectsPage").hide("");
	$('#aboutMePage').hide("");
	$("#pictureAndAboutMe").hide("");
	$("#cricketRobot").hide("");
	$("#dontGiveUp").hide("");
	$("#itsPossible").hide("");
	$("#socialPage").hide("");
	$("#contactSuccess").hide("");
	$("#ballJumpPage").hide("");
	//$("#myFitnessCal").hide("");
});

//Below are the navigation menu onClicks functions
function homeOnClick(){
	if(!!!$('#pictureAndAboutMe').length){
		setTimeout(function(){
			location.href='index.html';
		}, 100);
	}
}
function contactOnClick(){
	if(!!!$('#contactPage').length){
		setTimeout(function(){
			location.href='contact.html';
		}, 100);
	}
	
}
function aboutMeOnClick(){
	if(!!!$("#aboutMePage").length){	
		setTimeout(function(){
			location.href = "aboutMe.html";
		}, 100);
	}	
}
function projectsOnClick(){
	if(!!!$("#projectsPage").length){	
		setTimeout(function(){
			location.href='projects.html';
		}, 100);
	}
}
function socialOnClick(){
	if(!!!$("#socialPage").length){	
		setTimeout(function(){
			location.href='social.html';
		}, 100);
	}
}
function cricketLinkOnClick(){
	if(!!!$("#cricketRobot").length){	
		setTimeout(function(){
			location.href='cricket.html';
		}, 100);
	}
	
}
function itsPossibleLinkOnClick(){
	if(!!!$("#itsPossible").length){	
		setTimeout(function(){
			location.href='itsPossible.html';
		}, 100);
	}
}
function dontGiveUpLinkOnClick(){
	if(!!!$("#dontGiveUp").length){	
		setTimeout(function(){
			location.href='dontGiveUp.html';
		}, 100);
	}
}
function ballJumpLinkOnClick(){
	if(!!!$("#ballJumpPage").length){	
		setTimeout(function(){
			location.href='ballJump.html';
		}, 100);
	}
}
//function myFitnessCalLinkOnClick(){
//	if(!!!$("#myFitnessCal").length){	
//		setTimeout(function(){
//			location.href='myFitnessCal.html';
//		}, 100);
//	}
//}



/**
 * This method will look how many rows in the project tab there are in the index.html and will fill them up
 */
function createProjects(){
	var table = document.createElement("table");
	document.getElementById("insertProjects").appendChild(table);
	
	var imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix,imageSeven,imageEight;
	
	imageOne = "images/MyFitnessCalWithApple.png"	
	imageTwo = "images/robotCompressed.png";
	imageThree = "images/websiteProjectImg.png";
	imageFour = "images/itspossible.png";
	imageFive = "images/appletpic.png";
	imageSix = "images/dontgiveup.png";
	imageSeven ="images/altera.jpg";
	imageEight = "images/myoProject.jpeg";

	
	var descOne,descTwo,descThree,descFour,descFive,descSix,descSever;
	descOne = "Developed and published an interactive iOS fitness application with Xcode which helps attain weight goals, dissect the amount of fat/muscle in one's body and calculates body mass index.<br><a target='_blank' href='https://itunes.apple.com/ca/app/myfitnesscal/id987945590?mt=8'>Click Here for more</a>";
	descTwo = "The Cricket Bot is an autonomous robot built with the Lego Mindstorms kit by a team of 6 students at McGill"+
			"The challenge was to build an autonomous robot navigating a maze full of obstacles (wood blocks), and to reach an optimal position from"+ 
			"where it would launch balls towards a pre-specified target.<br><a onclick='cricketLinkOnClick()'>Click Here for more</a>";
	descThree = "This website is written using HTML, CSS, PHP and JavaScript.<br><a onclick=''>Click Here for more</a>";
	descFour = "Motivational video done with Sony Vegas Pro. Received over 800k views!<br><a onclick='itsPossibleLinkOnClick();'>Click Here to watch the video</a>";
	descFive = "Ball Jump is a game designed and developed in Java.<br><a href='ballJump.html'>Click Here to play!</a>";
	descSix = "Motivational video done with Sony Vegas Pro. Received over 1M views!<br><a onclick='dontGiveUpLinkOnClick();'>Click Here to watch the video</a>";
	descSeven = "A digital system design project done with VHDL using the Altera Quartus II software. It was later integrated into a complete user-friendly system, using an FPGA development board.<br><a target='_blank' href='https://www.dropbox.com/s/hy7hpns6l7f9u8x/musicBoxFinalReport.pdf?dl=0'>Click Here for the final report</a>";
	descEight = "diVRse consists of 6 passionate team members wanting to reach out to the rest of the world all with the aim of providing a better future. Virtual Resuscitation is an improved method in teaching CPR.<br><a target='_blank' href='teamdivrse.com'>Click Here for more</a>";
	
	addProject(table,imageOne,"01",descOne);
	addProject(table,imageTwo,"02",descTwo);
	addProject(table,imageThree,"03",descThree);
	addProject(table,imageFour,"04",descFour);
	addProject(table,imageFive,"05",descFive);
	addProject(table,imageSix,"06",descSix);
	addProject(table,imageSeven,"07",descSeven);
	addProject(table,imageEight,"08",descEight);
	
	$("#projectsPage").show("");
	
}
/**
 * This method will take a project and insert it to the project table
 * @param tbl The table to insert the project at
 * @param icon the image to display for the project
 * @param projectNumber Project number
 * @param description Description of project
 */
function addProject(tbl,icon,projectNumber,description){
	var row = document.createElement("tr");	
	row.setAttribute("style", "height:400px;");
	var tdOne = document.createElement("td");
	var img = document.createElement("img");
	img.setAttribute("src", icon);
	img.setAttribute("class", "projectsPageImage");
	tdOne.appendChild(img);
	//document.getElementById("test").appendChild(tdOne);
	
	var tdTwo = document.createElement("td");
	tdTwo.setAttribute("class", "projectDescription");
	
	var circleDiv = document.createElement("div");
	circleDiv.setAttribute("class", "circle");
	circleDiv.setAttribute("style", "background-color:rgb(97, 207, 211);height:130px;");
	
	var circleText = document.createElement("span");
	circleText.setAttribute("class", "font_6");
	circleText.setAttribute("style", "color:white;");
	circleText.innerHTML = "PROJECT | "+projectNumber;
	
	var line = document.createElement("hr");
	var p = document.createElement("p");

	p.innerHTML =  description;
	
	circleDiv.appendChild(circleText);
	
	tdTwo.appendChild(circleDiv);
	tdTwo.appendChild(line);
	tdTwo.appendChild(p);
	row.appendChild(tdOne);
	row.appendChild(tdTwo);

	tbl.appendChild(row);
	
	//Add a line to seperate projects
	var endRow = document.createElement("tr");
	var hr = document.createElement("hr");
	var columnSpanTwo = document.createElement("td");
	columnSpanTwo.setAttribute("colspan", "2");
	columnSpanTwo.appendChild(hr);
	endRow.appendChild(columnSpanTwo);
	tbl.appendChild(endRow);
		
	
}
//Below are the init functions
function projectsInit(){
	createProjects();
	setMenuHover();	
}
function aboutMeInit(){
	$("#aboutMePage").show("");
	setMenuHover();
	
}
function socialInit(){
	$("#socialPage").show("");
	setMenuHover();
	setIconOverlayHover();
	
}
function contactInit(){
	$("#contactPage").show("");
	setMenuHover();
	setContactForm();
	
}
function contactSuccessInit(){
	$("#contactSuccess").show("");
	setMenuHover();
}
function cricketInit(){
	$("#cricketRobot").show("");
	setMenuHover();
	
}
function itsPossibleInit(){
	$("#itsPossible").show("");
	setMenuHover();
	
}
function dontGiveUpInit(){
	$("#dontGiveUp").show("");
	setMenuHover();
	
}
function ballJumpInit(){
	$("#ballJumpPage").show("");
	setMenuHover();
}
//function myFitnessCalInit(){
//	$("#myFitnessCal").show("");
//	setMenuHover();
//}
/**
 * This function sets the effects on the menu when you hover on it
 */
function setMenuHover(){
	//main menu hover
	$(".homeMenu").hover(function(){
		$(this).addClass("hoverMenu");
	},function(){
		$(this).removeClass("hoverMenu");
	});
	$(".contactMenu").hover(function(){
		$(this).addClass("hoverMenu");
	},function(){
		$(this).removeClass("hoverMenu");
	});
	$(".projectsMenu").hover(function(){
		$(this).addClass("hoverMenu");
	},function(){
		$(this).removeClass("hoverMenu");
	});
	$(".aboutMeMenu").hover(function(){
		$(this).addClass("hoverMenu");
	},function(){
		$(this).removeClass("hoverMenu");
	});
	
	if(!!$('#pictureAndAboutMe').length){
		$('.homeMenu').addClass("hoverMenuSelected");
	}else if(!!$("#contactPage").length){
		$(".contactMenu").addClass("hoverMenuSelected");
	}else if(!!$("#projectsPage").length){
		$('.projectsMenu').addClass("hoverMenuSelected");
	}else if(!!$("#aboutMePage").length){
		$('.aboutMeMenu').addClass("hoverMenuSelected");
	}
		
}
/**
 * This function puts an overlay effect when you hover the mouse on the social icons.
 */
function setIconOverlayHover(){
	$("#facebookIcon").hover(function(){
		$(this).addClass("hoverSocialIcon");
	},function(){
		$(this).removeClass("hoverSocialIcon");
	});
	$("#instagramIcon").hover(function(){
		$(this).addClass("hoverSocialIcon");
	},function(){
		$(this).removeClass("hoverSocialIcon");
	});
	$("#linkedInIcon").hover(function(){
		$(this).addClass("hoverSocialIcon");
	},function(){
		$(this).removeClass("hoverSocialIcon");
	});
	$("#twitterIcon").hover(function(){
		$(this).addClass("hoverSocialIcon");
	},function(){
		$(this).removeClass("hoverSocialIcon");
	});
}
/**
 * This function is called when the main page loads. It is only called once.
 */
function init(){

	$('#pictureAndAboutMe').show("");
	setMenuHover();
	
	//circle hover
	$("#circleRed").hover(function(){
		$(this).addClass("hoverCircleRed");
	},function(){
		$(this).removeClass("hoverCircleRed");
	});
	$("#circleBlue").hover(function(){
		$(this).addClass("hoverCircleBlue");
	},function(){
		$(this).removeClass("hoverCircleBlue");
	});
	$("#circleYellow").hover(function(){
		$(this).addClass("hoverCircleYellow");
	},function(){
		$(this).removeClass("hoverCircleYellow");
	});
		
}