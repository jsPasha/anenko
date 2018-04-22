$(function () {

	var fullPageInstanse = false;

	$(window).resize(function () {
		$.fn.fullpage.instanse
		if (this.innerHeight < 700 || this.innerWidth <= 1200) {
			$.fn.fullpage.destroy('all');
			fullPageInstanse = false;
		} else if (!fullPageInstanse) {
			$('#fullpage').fullpage({
				navigation: true,
				navigationPosition: 'left',
				scrollOverflow: true,
				menu: '#myMenu'
			});
			fullPageInstanse = true;
		}
	});

	$('#myMenu a').click(function(e) {
		if ( !fullPageInstanse ) {
			e.preventDefault();
			var target = $(this).attr('href');
			console.log($('[data-anchor="'+target.substr(1)+'"]'))
			$('html, body').stop().animate({
				scrollTop: $('[data-anchor="'+target.substr(1)+'"]').offset().top
			})
		}
	});

	$('footer ul a').click(function(e) {
		if ( !fullPageInstanse ) {
			e.preventDefault();
			var target = $(this).attr('href');
			console.log($('[data-anchor="'+target.substr(1)+'"]'))
			$('html, body').stop().animate({
				scrollTop: $('[data-anchor="'+target.substr(1)+'"]').offset().top
			})
		}
	});

	$('.btn').click(function() {
		$.magnificPopup.open({
			items: {
				src: '#popup'
			}
		})
	});

	if (window.innerHeight >= 700 && window.innerWidth > 1200) {
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'left',
			scrollOverflow: true,
			menu: '#myMenu'
		});
		fullPageInstanse = true;
	}


	$('#carousel').owlCarousel({
		center: true,
		items: 3,
		startPosition: 4,
		margin: -260,
		nav: true,
		navText: "",
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			768: {
				items: 3,
				margin: -260
			}
		}
	});

	$('#carousel2').owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		navText: "",
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	// Custom JS

});

function timer() {

	try {
		var end = new Date(endDate);
	} catch (error) {
		console.log('No "var endDate = \'01/01/2018 08:0 PM\';" in <head>. Create <script>var endDate = \'01/01/2018 08:0 PM\';</script> in head tag.')
		var end = new Date('01/01/2018 08:0 PM');
	}

	var _milisec = 10;
	var _second = _milisec * 100;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;

		if (distance < 0) {
			document.getElementsByClassName('day').text("00");
			document.getElementsByClassName('hour').text("00");
			document.getElementsByClassName('min').text("00");
			document.getElementsByClassName('sec').text("00");
			return;
		}

		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		if (days < 10) days = '0' + days;

		$('.day').html(splitData(days));
		$('.hour').html(splitData(hours));
		$('.min').html(splitData(minutes));
		$('.sec').html(splitData(seconds));
	};
	setInterval(showRemaining, 500);
}

function splitData(data) {
	data = data + '';
	var splitVal = data.split('');
	return '<i>' + splitVal[0] + '</i><i>' + splitVal[1] + '</i>'
}

timer()

