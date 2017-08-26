 
var Yike = angular.module('Yike', ['ngRoute', 'Controllers']);

Yike.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

Yike.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/today', {
		templateUrl: './views/today.html',
		controller: 'todayCtrl'
	})
	.when('/older', {
		templateUrl: './views/older.html',
		controller: 'olderCtrl'
	})
	.when('/author', {
		templateUrl: './views/author.html',
		controller: 'authorCtrl'
	})
	.otherwise({
		redirectTo: '/today'
	});
}]);

Yike.run(['$rootScope', function($rootScope) {
	$rootScope.collapsed = false;

	$rootScope.toggle = function() {

		$rootScope.collapsed = !$rootScope.collapsed;

		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.collapsed) {
			for (var i = 0; i < navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionDuration = (i + 1)*0.15 + 's';

			}
		}
		else {
			for (var j = navs.length-1; j>0; j--) {
				navs[j].style.transform = 'translate(-100%)';
				navs[j].style.transitionDelay = '';
				navs[j].style.transitionDuration = (navs.length-1 -j)*0.15 + 's';
			}
		}
	}

	
}]);

