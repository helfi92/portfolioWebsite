app.controller('MotivationalController',['$scope','$window' ,'IsMobile',function($scope,$window,IsMobile){
	$scope.backgroundColor = "#ddd";

	$scope.title = {
	 	itspossible: 'MOTIVATION - "It\'s Possible"',
		dontgiveup: 'MOTIVATION - "Never Give Up , Reach For Your Dreams"',
	};
	
	if(IsMobile.isMobile()){
		$scope.textAlign = 'justify';
	}else{
		$scope.textAlign = 'left';
	}

	$scope.videoHeight = 315;
	$scope.videoWidth = 560;

	$scope.application = {
		mobileBreakPoint : 992,
	}
	
	$scope.init = function(){
		if($window.innerWidth <= $scope.application.mobileBreakPoint){
       	$scope.videoHeight = 300;
		$scope.videoWidth = 300;
       }else{
       	$scope.videoHeight = 315;
		$scope.videoWidth = 560;
       }
       $scope.$apply();
	}
	
	angular.element($window).bind("resize", function() {
       if($window.innerWidth <= 992){
	       $scope.videoWidth = 300;
	       $scope.videoHeight = 300;
       }else{
	       	$scope.videoHeight = 315;
			$scope.videoWidth = 560;
       }
       $scope.$apply();  
   });
}]);