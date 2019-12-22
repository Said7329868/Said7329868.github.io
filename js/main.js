$(function(){
    
///////menu///////////
      $('.menu_btn').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
    
      $('.overlay').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
     
    
    $(window).resize(function() {
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
        }
    })
    
    
       //////////////////////////////////////////для изменения menu
    
       function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = $(".menu");
            if (distanceY > shrinkOn) {
                header.addClass("sma");
            } else {
                if ( header.hasClass("sma")) {
                    header.removeClass("sma");
                }
            }
        });
    }
    window.onload = init();
    
    
    
///////menu end ///////////
  
////////////// gallery//////////////////

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
////////////// gallery end//////////////
   

/////////////////////slider-2///////////////////////////


$('.text-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
});


/////////////////////slider-2 end///////////////////////



///////////////////////кнопка вниз контакт//////////////
  
  $('.good-news').hide();
  
  $('.but-clic').on('click',function(){
    $('.good-news').slideToggle(1000);
  }) 

///////////////////////кнопка вниз контакт end/////////



/////////////video/////////////////////////////

$("#video__play").click(function(){
  var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
  $(this).parents('.js-video').html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

/////////////video end/////////////////////////////
  })