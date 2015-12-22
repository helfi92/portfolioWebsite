app.controller('RootController',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.spinner = function(){
    	$('.spinner').fadeOut(1000);
	};

	
	

}]);