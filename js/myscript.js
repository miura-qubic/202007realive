
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		if(w < spwidth){
			Nav.classList.toggle('active');
		}
	});

	// パララックス
	var wh = window.innerHeight,
	reg = 9;

	window.addEventListener('load', update_window_size);
	window.addEventListener('resize', update_window_size);
	function update_window_size() {
		wh = window.innerHeight;
	}

	var paraItems = document.querySelectorAll('.para-item');//対象
	paraItems = Array.prototype.slice.call(paraItems, 0);

	if (paraItems.length) {
		parallax();
		window.addEventListener('load', parallax);
		window.addEventListener('resize', parallax);
		window.addEventListener('scroll', parallax, { passive: true });
	}

	function parallax() {
		paraItems.forEach(function (paraItem, i) {

			paraItem.style.transform = '';
			var nowpos = paraItem.getBoundingClientRect().top - wh,
				myreg = paraItem.getAttribute('data-reg') ? Number(paraItem.getAttribute('data-reg')) : reg;
			if (nowpos < 0) {
				paraItem.style.transform = 'translate(0,' + (nowpos / myreg) + 'px)';
			}

		});
	}
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

	$('.slider02 li').eq(0).css({
		'z-index': 10,
	});
	$('.slider02 li').eq(0).animate({
		'opacity': 0
	}, 1500);

	$('.slider02 li').eq(1).css('z-index', 9);

	let clone02 = $('.slider02 li').eq(0).clone();

	$('.slider02 ul').append(clone02);
	$('.slider02 li').eq(2).css({
		'z-index': 8,
		'opacity': 1
	});

	setTimeout(function () {
		$('.slider02 li').eq(0).remove();
	}, 3000);


	setInterval(function () {

		sliderAnim02();
		
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

	let sliderAnim02 = function () {

		$('.slider02 li').eq(0).css({
			'z-index': 10,
		});
		$('.slider02 li').eq(0).animate({
			'opacity': 0
		}, 1500);

		$('.slider02 li').eq(1).css('z-index', 9);

		let clone = $('.slider02 li').eq(0).clone();

		$('.slider02 ul').append(clone);
		$('.slider02 li').eq(2).css({
			'z-index': 8,
			'opacity': 1
		});

		setTimeout(function () {
			$('.slider02 li').eq(0).remove();
		}, 3000);
	}

	// アーティストをクリックしたらオーバーレイ表示
	$('.top04 .inner01').on('click', function(){
		var itemIndex = $(this).index();
		$('.overlay_area01').eq(itemIndex).fadeIn();
	});
	$('.top04 .inner02').on('click', function(){
		var itemIndex02 = $(this).index();
		$('.overlay_area02').eq(itemIndex02).fadeIn();
	});
	$('.top04 .inner03').on('click', function(){
		var itemIndex03 = $(this).index();
		$('.overlay_area03').eq(itemIndex03).fadeIn();
	});
	// オーバーレイをクリックしたら閉じる
	if(w > spwidth){
		$('.overlay_area').on('click', function(){
			$(this).fadeOut();
		});
		// オーバーレイの中のコンテンツをクリック時は閉じない
		$('.overlay_box_in').on('click', function(e){
			e.stopPropagation();
		});
	}else{
		$('.top04 .overlay_area .close_btn').on('click', function(){
			$('.overlay_area').fadeOut();
		});
	}


	$('header nav ul li a').click(function () {
		$('.menu_open').removeClass('active');
		if(w > spwidth){
			$('header nav').removeClass('active').hide();
		}else{
			$('header nav').removeClass('active');
		}
	});

	$('.menu_open').on('click', function(){
		if(w > spwidth){
			$('header nav').slideToggle('fast');
			if($('header nav').hasClass('active')){
				$('header nav').removeClass('active');
			}else{
				$('header nav').addClass('active');
			}
		}
	});

	// スムーススクロール 
	var headerHeight = $('header').outerHeight();
	var urlHash = location.hash;
	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
				var target = $(urlHash);
				var position = target.offset().top - headerHeight;
				$('body,html').stop().animate({scrollTop:position}, 500);
		}, 100);
	}
	$('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500);
	});
	
});

// フェードイン
$(window).on('load scroll', function () {
	$('.fadein, .fadein02, .fade01, .fade02, .fade03, .fade04, .top01 .video_wrap .txt .box').each(function () {
		let elemOffset01 = $(this).offset().top;
		let scrollPos = $(window).scrollTop();
		let wh = $(window).height();
			if (scrollPos > elemOffset01 - wh + (wh / 2) - 500) {
			$(this).addClass('active');
		}
	});

});