'use strict';

$(document).on('ready', function () {
	// variables
	var contextWindow = $(window);
	var $root = $('html');
	var siteHeaderFooter = $('.page-footer, .page-header, .page-cover');

	// 1. Background image and colors
	// 1.1 Background Image as data attribute
	var list = $('.bg-img');
	for (var i = 0; i < list.length; i++) {
		var src = list[i].getAttribute('data-image-src');
		list[i].style.backgroundImage = "url('" + src + "')";
		list[i].style.backgroundRepeat = "no-repeat";
		list[i].style.backgroundPosition = "center";
		list[i].style.backgroundSize = "cover";
	}
	// Image block to Background image 
	var listImgBlock = $('.img-block');
	for (var i = 0; i < listImgBlock.length; i++) {
		var src = listImgBlock[i].getAttribute('src');
		var divBlock = document.createElement("div");
		divBlock.setAttribute("class", "img");
		divBlock.style.backgroundImage = "url('" + src + "')";
		divBlock.style.backgroundRepeat = "no-repeat";
		divBlock.style.backgroundPosition = "center";
		divBlock.style.backgroundSize = "cover";
		$(listImgBlock[i]).after(divBlock);
		listImgBlock[i].style.display = "none";
	}
	// 1.2. Background Color as data attribut
	var listColor = $('.bg-color');
	for (var i = 0; i < listColor.length; i++) {
		var src = listColor[i].getAttribute('data-bgcolor');
		listColor[i].style.backgroundColor = src;
	}
	// 1.3 Slideshow Background
	// vegas slideshow background
	var imageList = $('.slide-show .img');
	var imageSlides = [];
	for (var i = 0; i < imageList.length; i++) {
		var src = imageList[i].getAttribute('data-src');
		imageSlides.push({ src: src });
	}
	$('.slide-show').vegas({
		delay: 5000,
		shuffle: true,
		slides: imageSlides,
		animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
	});

	// 3. Menu icon clicked
	var menuIcon = $('#menu-icon');
	var navfullMenu = $('#navfull-menu');
	var navbarMenu = $('#navbar-menu');
	menuIcon.on('click', function () {
		menuIcon.toggleClass('menu-visible');
		navfullMenu.toggleClass('menu-visible');
		navbarMenu.toggleClass('menu-visible');
		// reactToMenu.toggleClass('menu-visible');
		return false;
	});

	var swiperSliderThumbsA = new Swiper('.slider-thumbs-a.swiper-container', {
		spaceBetween: 16,
		slidesPerView: 3,
		loop: false,
		freeMode: true,
		grabCursor: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-container.slider-thumbs-a .thumbs-pagination',
			clickable: true,
		},
	});
	// 4. Sliders
	var swiperSliderA = new Swiper('.slider-a.swiper-container', {
		navigation: {
			nextEl: '.swiper-container.slider-a .slider-next',
			prevEl: '.swiper-container.slider-a .slider-prev',
		},
		pagination: {
			el: '.swiper-container.slider-a .swiper-pagination',
			clickable: true,
			type: 'fraction',
			//   dynamicBullets: true,
		},
		spaceBetween: 0,
		slidesPerView: 1,
		// loop: true, // loop to start
		// freeMode: false,
		// freeModeSticky: true,
		// freeModeMomentumVelocityRatio: 2,
		grabCursor: false,
		autoplay: 5000,
		speed: 1200,
		virtualTranslate: false,

		thumbs: {
			swiper: swiperSliderThumbsA
		}
		// init: false, // set true to call it later
	});

	var swiperSliderB = new Swiper('.slider-b.swiper-container', {
		navigation: {
			nextEl: '.swiper-container.slider-b .slider-next',
			prevEl: '.swiper-container.slider-b .slider-prev',
		},
		pagination: {
			el: '.swiper-container.slider-b .swiper-pagination',
			clickable: true,
			// type: 'fraction',
			//   dynamicBullets: true,
		},
		slidesPerView: 1,
		// loop: true, // loop to start
		effect: 'fade',
		grabCursor: true,
		autoplay: 5000,
		speed: 1200,
		virtualTranslate: false,
		// init: false, // set true to call it later
	});
	
	// 5. Init video background
	var videoBg = $('.video-container video, .video-container object');
	// Fix video background
	// videoBg.maximage('maxcover');

	// 6. Scrolling animation
	var scrollHeight = $(document).height() - contextWindow.height();
	contextWindow.on('scroll', function () {
		var scrollpos = $(this).scrollTop();
		// if (scrollpos > 100 && scrollpos < scrollHeight - 100) {
		if (scrollpos > 100) {
			siteHeaderFooter.addClass("scrolled");
		}
		else {
			siteHeaderFooter.removeClass("scrolled");
		}
	});
	/* var scrollDown = $('.scroll-down');
	scrollDown.on('click', function () {
		// contextWindow.scrollTop(window.innerHeight);

		if (! $root.hasClass('smooth-scroll')) {

			$root.animate({
				scrollTop: window.innerHeight
			}, 400, function () {
			});
		} else{
			contextWindow.scrollTop(window.innerHeight);
		}
	}); */

	/* //mouse parallax
	// home screen parallax
	var homeScreenImg = document.getElementById('home-parralax-img')
	if (homeScreenImg) {
		var homeScreenImgInstance = new Parallax(homeScreenImg);
	}
	var homeScreenText = document.getElementById('home-parralax-text');
	if (homeScreenText) {
		var homeScreenTextInstance = new Parallax(homeScreenText);
	}

	// scrolling parallax
	var parallaxSpeed0 = new Rellax('.parallax-anim .parallax-speed-0', {
		center: true,
		speed: 0,
	});
	var parallaxSpeed1 = new Rellax('.parallax-anim .parallax-speed-1', {
		center: true,
		speed: 1,
	});
	var parallaxSpeed2 = new Rellax('.parallax-anim .parallax-speed-2', {
		center: true,
		speed: 2,
	});
	var parallaxSpeed3 = new Rellax('.parallax-anim .parallax-speed-3', {
		center: true,
		speed: 3,
	}); */

	// 7. Subscription to newsletter form
	// Default server url
	var newsletterServerUrl = './ajaxserver/serverfile.php';
	var sendEmailForm = $('.send_email_form');
	// check if server url is defined by an 'action' attribute
	if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
		newsletterServerUrl = sendEmailForm.attr('action');
	}
	sendEmailForm.initForm({
		serverUrl: newsletterServerUrl,
	});

	// Contact form
	var messageServerUrl = './ajaxserver/serverfile.php';
	var sendMessageForm = $('.send_message_form');
	// check if server url is defined by an 'action' attribute
	if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
		messageServerUrl = sendMessageForm.attr('action');
	}
	sendMessageForm.initForm({
		serverUrl: messageServerUrl,
	});

	// 8. Page Loader : hide loader when all are loaded
	contextWindow.on('load', function () {
		$('#page-loader').addClass('p-hidden');
		$('.section').addClass('anim');
		$('.scrollpage-container .section-home').addClass('active');
		siteHeaderFooter.removeClass('loading-anim');
	});

	// 9. init fullpage js
	// Get sections name
	var pageSectionDivs = $('.fullpage-scroll .section');
	var pageSections = [];
	var pageCover = $('.page-cover');
	var fpNav = $('#fp-nav');
	for (var i = 0; i < pageSectionDivs.length; i++) {
		pageSections.push(pageSectionDivs[i].getAttribute('data-id'));
	}
	var scrollOverflow = true;
	var autoScrolling = true;
	var fitToSection = true;
	if ($('.normal-scroll .section').length > 1) {
		scrollOverflow = false;
		autoScrolling = false;
		fitToSection = false;
	}
	$('.fullpage-scroll').fullpage({
		menu: '#sidebar-menu',
		anchors: pageSections,
		css3: true,
		scrollOverflow: scrollOverflow,
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'right',
		responsiveWidth: 768,

		autoScrolling: autoScrolling,
		fitToSection: fitToSection,
		// scrollBar: true,
		afterLoad: function (anchorLink, index) {
			// Behavior after a section is loaded
			// Page cover
			if (index > 1) {
				if (!pageCover.hasClass('scrolled')) {
					pageCover.addClass('scrolled');
				}
				if (!siteHeaderFooter.hasClass('fp-scrolled')) {
					siteHeaderFooter.addClass('fp-scrolled');
				}
			} else {
				pageCover.removeClass('scrolled');
				siteHeaderFooter.removeClass('fp-scrolled');
			}
			// section animation
			var activeSection = $('.section.active');
			// text color of section
			// force white text color
			if (activeSection.hasClass('content-white')) {
				siteHeaderFooter.addClass('content-white');
				fpNav.addClass('content-white');
			} else {
				siteHeaderFooter.removeClass('content-white');
				fpNav.removeClass('content-white');
			}
			if (!!activeSection[0].getAttribute('data-color')) {
				pageCover[0].setAttribute('data-color', activeSection[0].getAttribute('data-color'))
				// pageCover.addClass(activeSection.getAttribute('section-color'));
			} else {
				pageCover[0].setAttribute('data-color','');
			}
		}
	});

	// Scroll to fullPage.js next/previous section
	$('.scrolldown a, .scroll.down').on('click', function () {
		try {
			// fullpage scroll
			$.fn.fullpage.moveSectionDown();
		} catch (error) {
			// normal scroll
			$root.animate({
				scrollTop: window.innerHeight
			}, 400, function () {
			});
		}

	});
});
