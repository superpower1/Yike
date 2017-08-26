<?php

	// 热门作者(推荐)
	$recUrl = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 热门作者(全部)
	$allUrl = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	$recJson = file_get_contents($recUrl);
	$allJson = file_get_contents($allUrl);

	// 由于无法合并两个json，所以先把json分别转化为数组，合并后再转回json
	// 把json转化成数组，第二个参数为true就是转化为数组，否则转化为对象
	$recArr = json_decode($recJson, true);
	$allArr = json_decode($allJson, true);

	// var_dump($recArr);

	// 将两个数组组合
	$result = array('rec' => $recArr, 'all' => $allArr);
	// 转回json返回
	echo json_encode($result);

