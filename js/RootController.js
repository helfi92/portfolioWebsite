app.controller('RootController',['$scope','$window','$rootScope',function($scope,$window,$rootScope){
	$scope.spinner = function() {
		$(window).ready(function() {
			$('.spinner').fadeOut(1000);
		})
	}
	console.log("%c Hassan Ali","color:blue;font-size:x-large;");
	console.log("%c"+String.fromCharCode(0xD83D, 0xDE04),'font-size:50px');
}]);