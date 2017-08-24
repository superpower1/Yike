// 这个模块用于管理所有控制器

angular.module('Controllers', [])

.controller('navCtrl', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#today', text: '今日一刻', icon: 'icon-home'},
		{link: '#older', text: '往期内容', icon: 'icon-file-empty'}
	];
}]);