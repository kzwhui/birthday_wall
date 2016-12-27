// toggle visibility for css3 animations
$(document).ready(function() {
	$('header').addClass('visibility');
	$('.carousel-iphone').addClass('visibility');
	$('.payoff h1').addClass('visibility');
	$('.features .col-md-4').addClass('visibility');
	$('.social .col-md-12').addClass('visibility');
});


//iphone carousel animation
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');

	} else if (scrollTop == 0)   {

		$('.navbar-default').removeClass('fixed-to-top');
	}


//animations
	$('.payoff h1').each(function(){

		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInLeft");
			}

	});

	$('.purchase button.app-store').each(function(){

		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated pulse");
			}

	});

	$('.features .col-md-4').each(function(){

		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated flipInX");
			}

	});

	$('.social .col-md-12').each(function(){

		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+550) {
				$(this).addClass("animated fadeInLeft");
			}

	});

	$('.get-it button.app-store').each(function(){

		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+850) {
				$(this).addClass("animated pulse");
			}

	});


});


// Parallax Content

function parallax() {

		// Turn parallax scrolling off for iOS devices

		    var iOS = false,
		        p = navigator.platform;

		    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		        iOS = true;
		    }

		var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('.payoff').css('background-position-y', scaleBg - 150);
            $('.social').css('background-position-y', scaleBg + 200);
        }

}

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}

}

$(document).ready(function () {

	var browserWidth = $(window).width();

	if (browserWidth > 560){

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}

});


$(window).resize(function () {

	var browserWidth = $(window).width();

	if (browserWidth > 560){

		$(window).scroll(function() {
			parallax();
			navbar();
		});

	}

});


// iPhone Header Carousel
$('header .carousel').carousel({
  interval: 3000
})

// iPhone Features Carousel
$('.detail .carousel').carousel({
  interval: 4000
})

// Empty JS for your own code to be here
//

//notify默认值
$.notifyDefaults({
    placement:{
        from: "bottom",
        align: "center"
    },
    type: "danger",
    offset: {
        x: 0,
        y: 20
    },
	template: '<div data-notify="container" class="col-xs-8 col-sm-3 col-md-3 alert alert-{0}" role="alert">' +
	 	      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
	 	      '<span data-notify="icon"></span> ' +
	 	      '<span data-notify="title">{1}</span> ' +
	 	      '<span data-notify="message">{2}</span>' +
	 	      '<div class="progress" data-notify="progressbar">' +
	 	      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
	 	      '</div>' +
	 	      '<a href="{3}" target="{4}" data-notify="url"></a>' +
	 	      '</div>'
});

function notifyError(msg)
{
    $.notify({
        icon: "glyphicon glyphicon-info-sign",
        message: msg
    });
}

function notifySuc(msg)
{
    $.notify({
        icon: 'glyphicon glyphicon-ok',
        message: msg
    }, {
        type: "success",
        delay: 1000,
        animate: {
            enter: "animated bounceInDown",
            exit: "animated bounceOutDown"
        }
    });
}