var app = angular.module('CommonModule',['ngRoute','ngAnimate']);

app.config(function($routeProvider) {
$routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'views/home.html',
        controller  : 'MainController',
    })

    .when('/robot', {
        templateUrl : 'views/robot.html',
        controller  : 'RobotController',
    })
    .when('/ballJump', {
        templateUrl : 'views/ballJump.html',
        controller  : 'BallJumpController',
    })
    .when('/itspossible', {
        templateUrl : 'views/itspossible.html',
        controller  : 'MotivationalController',
    })
    .when('/dontgiveup', {
        templateUrl : 'views/dontgiveup.html',
        controller  : 'MotivationalController',
    })
    .when('/evolution', {
        templateUrl : 'views/portfolio-evolution.html',
        controller  : 'PortfolioEvolutionController',
    })
    .when('/flappybird', {
        templateUrl : 'views/flappyView.html',
        controller  : 'FlappyController',
    })

    .otherwise({
        redirectTo: '/'
    });
     
});

app.factory('IsMobile', function() {
  var fac = {
       isMobile : function () {
        if( navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPad/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i)
             ){
                return true;
        }
        else {
            return false;
        }   
      
        },
    }  
  return fac;
});