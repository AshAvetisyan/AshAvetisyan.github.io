$(document).ready(function() {


  $('.portfolio1').mouseenter(function(e) {
    $('.portfolioLogo1').css({
      'top': '0',
      'transition': '0.5s',
      
    });


    $('.portfolioBtn1').fadeIn(200);

  })
  
  $('.portfolio1').mouseleave(function(e) {
    $('.portfolioLogo1').css({
      'top': 'calc(50% - 100px)',
      'transition': '0.5s'
    });

    
    $('.portfolioBtn1').fadeOut(200);
   

  })


  $('.portfolio2').mouseenter(function(e) {
    $('.portfolioLogo2').css({
      'top': '10%',
      'transition': '0.5s'
  });

  $('.portfolioBtn2').fadeIn(200);

  })
  
  $('.portfolio2').mouseleave(function(e) {
    $('.portfolioLogo2').css({
      'top': 'calc(50% - 75px)',
      'transition': '0.5s'
  });

  $('.portfolioBtn2').fadeOut(200);

  })

  $('.portfolio3').mouseenter(function(e) {
    $('.portfolioLogo3').css({
      'top': '10%',
      'transition': '0.5s'
  });

  $('.portfolioBtn3').fadeIn(200);

  })
  
  $('.portfolio3').mouseleave(function(e) {
    $('.portfolioLogo3').css({
      'top': 'calc(50% - 53px)',
      'transition': '0.5s'
  });

  $('.portfolioBtn3').fadeOut(200);


  })


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500
      });

});