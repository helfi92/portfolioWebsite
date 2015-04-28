<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="images/hassan.png" type="image/png" sizes="16x16">
<!-- CSS files -->
<link href ="css/common.css" rel="stylesheet" type="text/css"/>
<!--  JS files -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="jquery-ui-1.11.4.custom/jquery-ui.js"></script>
<script src="js/general.js"></script>
<title>Hassan Ali</title>
</head>
<body onLoad="contactSuccessInit()">
	<div class="content">
		<div class="nameAndNavbar"	>
			<div>
				<span class ="font_0"><b>Hassan Ali</b></span>
				<br><span style="float:left;width:50%;" class ="font_6">Mobile application Developer / Web designer </span>
			
				<div class="navbar font_1">
					<table style="width:50%;">
					<tr><td class="homeMenu" style="width:25%;text-align:center;"><span onclick="homeOnClick()">HOME</span></td><td class="projectsMenu" style="width:25%;text-align:center;"><span onclick="projectsOnClick();">PROJECTS</span></td><td class="aboutMeMenu" style="width:25%;text-align:center;"><span onclick="aboutMeOnClick();">ABOUT ME</span></td><td class="contactMenu" style="width:25%;text-align:center;"><span class="hoverMenuSelected" onclick="contactOnClick();">CONTACT</span></td>
					</tr>
					</table>
				</div>
			</div>
		</div>

		
		<div id="contactSuccess" style="display:none">
			
			<div style="margin-top:30px;text-align:center;" class="font_4">
				Message Sent <img src="images/checkImg.png" alt="PIC" style="height:50px;width:50px;margin-bottom:-10px;"> <a onclick="contactOnClick();" href="">(go back)</a>
			</div>
						
		</div>
	
	</div>


</body>
</html>

