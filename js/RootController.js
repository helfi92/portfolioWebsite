app.controller('RootController',['$scope','$window','$rootScope',function($scope,$window,$rootScope){
	$scope.spinner = function() {
		$(window).on('load', function(){
			$('.spinner').fadeOut(1000);
		})
	}
}]);