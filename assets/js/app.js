// JavaScript Document

// this script makes the nav animate smaller when scrolled past the top part of the page
$(window).scroll(function() {
		var scrolledToTop = $('section.scroll-trigger').offset().top;
		
		if ($(window).scrollTop() > scrolledToTop) {
			$('nav').addClass('smallNav');
			$('#top ul.web-menu').addClass('t-marg-35');
			$('#top div.sign-in-container').addClass('t-marg-35');
			$('#top div.logo-container').addClass('t-marg-10');
			$('#top div.logo-container img').attr('src', 'assets/img/rb-logo-sm.png');
		};
		
		if ($(window).scrollTop() < scrolledToTop) {
			$('nav').removeClass('smallNav');
			$('#top ul.web-menu').removeClass('t-marg-35');
			$('#top div.sign-in-container').removeClass('t-marg-35');
			$('#top div.logo-container').removeClass('t-marg-10');
			$('#top div.logo-container img').attr('src', 'assets/img/rb-logo.png');
		};
	});
	
// this script makds the hover effect of the about page team section
$(document).ready(function () {
  	$('#team ul li').mouseenter(function () {
  		$(this).addClass('z-up');
		$('.z-up .bio-sm').fadeIn(250, 'swing');
  	});
	$('#team ul li').mouseleave(function () {
		$(this).removeClass('z-up');
  		$('.bio-sm').hide();
  	}); 
  });
  
// this script would make the image change on mouse enter
  	/*$('#mike').mouseenter(function () {
		$(this).children('img').attr('src', 'assets/images/team/ryan.png');
	});
	$('#mike').mouseout(function () {
		$(this).children('img').attr('src', 'assets/images/team/mike.png');
	});*/
	
// ajax submit and trigger thank you modal
	$('form.contact').submit(function(e) {
		var $this = $(this);
		e.preventDefault(); // Prevents the form from submitting regularly
	
		$.ajax({            // Sends the appropriate AJAX request instead
			url: $this.attr('action', 'send.jsp'),
			type: $this.attr('method'),
			data: $this.serialize(),
			success: function(response) {
				$('#thank-you-Modal').foundation('reveal', 'open');
			}
		});
	});
	
//form validation
$(document).ready(function() { 
  $('#contact').validate({ 
    rules: { 
      Name: 'required',    // simple rule, converted to {required: true} 
      Email: {             // compound rule 
      	required: true, 
        Email: true 
      }
    }
  }); 
}); 

$('#contactButton').click(function() {
       $.ajax({
               url: "send.jsp", //path to email engine
               type: "POST", // post or get
               data: $("#contact").serialize(), //id to the form you want to submit
               success: function(response) {
                       $( '#thank-you-Modal' ).foundation( 'reveal', 'open' ); // call back action
               }
       });
       return false;
});	

$('#contactButton2').click(function() {
       $.ajax({
               url: "send.jsp", //path to email engine
               type: "POST", // post or get
               data: $("#contact2").serialize(), //id to the form you want to submit
               success: function(response) {
                       $( '#thank-you-Modal' ).foundation( 'reveal', 'open' ); // call back action
               }
       });
       return false;
});	
  
