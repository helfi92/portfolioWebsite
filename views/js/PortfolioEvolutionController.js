app.controller('PortfolioEvolutionController',['$scope', function($scope){
	$scope.backgroundColor = "#ddd";

	$scope.website = [
		{
			version : 1,
			image : 'images/website-version-1.png',
			tags:['HTML','CSS'],
			desc : 'This was my first website to ever code. The latter was fully static and contained only HTML and CSS.',
			year : '2011',

		},
		{
			version : 2,
			image : 'images/website-version-2.png',
			tags : ['HTML','CSS','Javascript','JQuery'],
			desc : 'This version of my portfolio was written with the main  in HTML, javascript, PHP. ',
			year: '2012 - 2014',

		},
		{
			version : 3,
			image : 'images/website-version-3.png',
			tags : ['HTML','CSS','Javascript','JQuery','AngularJS','MVC','Bootstrap'],
			desc : 'Version 3 of my portfolio shares an MVC architecture. AngularJS is the main framework used in this website.',
			year: '2015 - Current',

		}
	]
}]);