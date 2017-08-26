// 这个模块用于管理所有控制器

angular.module('Controllers', [])

.controller('navCtrl', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/settings', text: '设置', icon: 'icon-cog'}
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
		url: './api/older.php'
	}).then(function(info) {
		$rootScope.loaded = true;
		$scope.date = info.data.date;
		$scope.posts = info.data.posts;
		console.log(info);
	});
}])

.controller('authorCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	$rootScope.title = '热门作者';
	$rootScope.loaded = false;

	$http({
		url: './api/author.php'
	}).then(function(info) {
		$rootScope.loaded = true;
		$scope.rec = info.data.rec;
		$scope.all = info.data.all;

		console.log(info);
	});
}])

.controller('categoryCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	$rootScope.title = '栏目精选';
	$rootScope.loaded = false;

	$http({
		url: './api/category.php'
	}).then(function(info) {
		$rootScope.loaded = true;
		$scope.columns = info.data.columns;

		console.log(info);
	});
}])