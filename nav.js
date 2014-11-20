$('.side-nav li').click(function() {
        $('span.movie-descriptor').not(this).hide();
        $('li').not(this).removeClass('active');
        $(this).find('span.movie-descriptor').show();
        $(this).addClass('active');
        });
    //display sub nav function
    $('.sub').click(function(event) {
      event.preventDefault();
    });
  $('.sub').mouseover(function(event) {
      $('#feature-nav').show();
      $('.sub').addClass('sub-active')
    });
    // hide sub nav on mouse out function
    $('nav').mouseleave(function(event) {
      $('#feature-nav').fadeOut('fast');
      $('.sub').removeClass('sub-active')
    });
    $('.web-menu').find('.no-sub').mouseover(function() {
      $('#feature-nav').fadeOut('fast');
      $('.sub').removeClass('sub-active')
    });