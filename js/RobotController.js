app.controller('RobotController',['$scope','$window', function($scope,$window){
	$scope.backgroundColor = "#ddd";

	$scope.videoHeight = '315';
	$scope.videoWidth = '560';

	$scope.application = {
		mobileBreakPoint : 992,
	}
	
	$scope.init = function(){
		if($window.innerWidth <= $scope.application.mobileBreakPoint){
       	$scope.videoHeight = '300';
		$scope.videoWidth = '300';

		$scope.robotHeight = '180px';
		$scope.robotWidth = '320px';
       }else{
       	$scope.videoHeight = '315';
		$scope.videoWidth = '560';

		$scope.robotHeight = '280px';
		$scope.robotWidth = '520px';
       }
       $scope.$apply();
	}

	angular.element($window).bind("resize", function() {
       if($window.innerWidth <= 992){
	       $scope.videoWidth = '300';
	       $scope.videoHeight = '300';

	       $scope.robotHeight = '180px';
			$scope.robotWidth = '320px';
       }else{
	       	$scope.videoHeight = '315';
			$scope.videoWidth = '560';

			$scope.robotHeight = '280px';
			$scope.robotWidth = '520px';
       }
       $scope.$apply();  
   });
}]);