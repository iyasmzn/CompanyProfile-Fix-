$(document).ready(function() {
			$('.search-active').click( function() {
				$('.search-body').animate({right: "0px"},'slow');
			});
			$('.search-deactivated').click( function() {
				$('.search-body').animate({right: "-100%"},'slow');
			});
			// Midnight Plugin
			// $('.midnight-plugin').midnight();
			$('.nava').midnight();
			// AOS
			AOS.init({
				offset: 200
			});
			// Sick
			$('.header-slick2').slick({
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
				speed: 1000,
				fade: true,
				cssEase: 'linear',
			});
			$('.recent-slick').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				infinite: true,
			});
			$('.carousel').carousel();
		});
		var a = 0;
		$(window).scroll(function() {
			// NAVBAR
			var navbar = $('.nava').offset().top,
					scroll = $(window).scrollTop();
			if (scroll > 200 ) {
				$('.nava').addClass('sticky-header').addClass('nava-midnight').removeClass('nava-abs').removeClass('my-4');
				$('.fixed-upper').css({"bottom":"20px"});
				$('.nava').animate({top:"0px",opacity:"1"},'slow');
				// $('.nava-midnight').midnight();
			}
			else {
				$('.nava').removeClass('nava-midnight').removeClass('sticky-header').addClass('nava-abs').addClass('my-4');	
				$('.fixed-upper').css({"bottom":"-200px"});
			}

			// WORK COUNT 
			var cTop = $('#count').offset().top - window.innerHeight;
			if (a == 0 && scroll > cTop ) {
				$('.counter-value').each(function() {
					var $this 	= $(this),
							countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					},
					{
						duration: 5*1000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							// alert('finished');
						}
					});
				});
				a = 1;
			}
		});