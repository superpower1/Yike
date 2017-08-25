// 这个模块用于管理所有控制器

angular.module('Controllers', [])

.controller('navCtrl', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#!/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#!/older', text: '往期内容', icon: 'icon-file-empty'}
	];
}])

.controller('todayCtrl', ['$scope', '$http', '$filter', '$rootScope', function($scope, $http, $filter, $rootScope) {
	$rootScope.title = '今日一刻';
	$rootScope.loaded = false;

	var today = $filter('date')(new Date, 'yyyy-MM-dd');
	// var today = '2017-08-24';

	$http({
		url: './api/today.php',
		method: 'get',
		params: {today: today}
	}).then(function(info) {
		$scope.date = info.data.date;
		$scope.posts = info.data.posts;
		$rootScope.loaded = true;
		console.log(info);
	});
}])

.controller('olderCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	$rootScope.title = '往期内容';
	$rootScope.loaded = false;

	$http({
		url: './api/older.php',
		method: 'get',
	}).then(function(info) {
		$rootScope.loaded = true;
		$scope.date = info.data.date;
		$scope.posts = info.data.posts;
		console.log(info);
	});
}])