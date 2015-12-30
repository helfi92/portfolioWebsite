app.controller('PortfolioEvolutionController',['$scope','$rootScope', function($scope){

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
			year: '2015',

		},
		{
			version : 4,
			image : 'images/website-version-4.png',
			tags : ['HTML','CSS','Javascript','JQuery','AngularJS','MVC','Bootstrap'],
			desc : 'Version 4 brings a better UX',
			year: '2016',

		},
		{
			version : 5,
			image : 'images/website-version-5.png',
			tags : ['HTML','CSS','Javascript','JQuery','AngularJS','MVC','Bootstrap'],
			desc : 'Asked for constructive critiques from the Computer Science and UX group. Version 5 reflects those changes.',
			year: '2016',

		}
	]
}]);