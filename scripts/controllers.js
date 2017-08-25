// 这个模块用于管理所有控制器

angular.module('Controllers', [])

.controller('navCtrl', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'}
	];
}])

.controller('todayCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
	// var today = $filter('date')(new Date, 'yyyy-MM-dd');
	var today = '2017-08-24';

	$http({
		url: './api/today.php',
		method: 'get',
		params: {today: today}
	}).then(function(info) {
		$scope.date = info.data.date;
		$scope.posts = info.data.posts;
		console.log(info);
	});
}])