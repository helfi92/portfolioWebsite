app.controller('RootController',['$scope','$window','$rootScope',function($scope,$window,$rootScope){
	$scope.spinner = function() {
		$(window).ready(function() {
			$('.spinner').fadeOut(1000);
		})
	}
}]);