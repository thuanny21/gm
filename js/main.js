$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 200);
	setTimeout(function () {
		$(".introducao h2").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);
	setTimeout(function () {
		$(".section-title h1").addClass("animated fadeInDown");
	}, 400);

	setTimeout(function () {
		$(".introducao-interna h1, h6").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);
});



$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $(".navbar").addClass("menu-diferente");
    } else {
      $(".navbar").removeClass("menu-diferente");
    }
  });
});




//scroll
$('.navbar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;

	$('html, body').animate({
			scrollTop: targetOffset - 60
	}, 500);
});



//Example starter JavaScript for disabling form submissions if there are invalid fields

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
