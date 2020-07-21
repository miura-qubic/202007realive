
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	// JQueryの範囲

	$('.slider li').eq(0).css({
		'z-index': 10,
	});
	$('.slider li').eq(0).animate({
		'opacity': 0
	}, 1500);

	$('.slider li').eq(1).css('z-index', 9);

	let clone = $('.slider li').eq(0).clone();

	$('.slider ul').append(clone);
	$('.slider li').eq(2).css({
		'z-index': 8,
		'opacity': 1
	});

	setTimeout(function () {
		$('.slider li').eq(0).remove();
	}, 3000);


	setInterval(function () {

		sliderAnim();
		
	}, 3500);


	let sliderAnim = function () {

		$('.slider li').eq(0).css({
			'z-index': 10,
		});
		$('.slider li').eq(0).animate({
			'opacity': 0
		}, 1500);

		$('.slider li').eq(1).css('z-index', 9);

		let clone = $('.slider li').eq(0).clone();

		$('.slider ul').append(clone);
		$('.slider li').eq(2).css({
			'z-index': 8,
			'opacity': 1
		});

		setTimeout(function () {
			$('.slider li').eq(0).remove();
		}, 3000);
	}


	// アーティストをクリックしたらオーバーレイ表示
	$('.top04 .inner').on('click', function(){
		// var itemIndex = $(this).index();
		$(this).next('.overlay_area').fadeIn();
		$('body').addClass('active');
	});
	// オーバーレイをクリックしたら閉じる
	$('.overlay_area').on('click', function(){
		$(this).fadeOut();
		$('body').removeClass('active');
	});
	// オーバーレイの中のコンテンツをクリック時は閉じない
	$('.overlay_box_in').on('click', function(e){
		e.stopPropagation();
	});


});