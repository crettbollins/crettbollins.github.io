var scrollTo

$(() => {

	$(window).on('resize', () => {
		if($(window).width() > 770 && !$('#links').is(':visible')) $('#links').show();
	})

	function scroll(to) {
		if($(window).width() < 770) navClose();		
		$('html, body').animate({scrollTop: $(`#${to}`).offset().top - $('nav').height() - 35}, 'slow');
	}

	scrollTo = scroll;

	// FAQ

	$('.faq-header').click(e => {
		let entry = $(e.target).closest('.faq-entry');
		if(entry.hasClass('faq-open')) {
			entry.removeClass('faq-open')
		} else {
			$('.faq-open').removeClass('faq-open');
			entry.addClass('faq-open');
		}
	})


	// Hamburger Nav

	document.getElementById('hamburger').addEventListener('click', navStatus);

	function navStatus() {
		document.body.classList.contains('hamburger-active') ? navClose() : navOpen();
	}

	function navClose() {
		$('#links').css('display', 'none');
		document.body.classList.remove('hamburger-active');
	}

	function navOpen() {
		$('#links').css('display', 'flex');
		document.body.classList.add('hamburger-active');
	}

})