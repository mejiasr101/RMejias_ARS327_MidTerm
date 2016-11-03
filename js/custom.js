/** 
  * Template Name: Snap Studio
  * Version: 1.1 
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  
  1. MENU
  2. LIGHTBOX SLIDER ( INTEGRATED PORTFOLIO PAGE )
  3. SLICK SLIDER ( INTEGRATED PORTFOLIO PAGE )
  4. POPUP VIEW ( INTEGRATED PORTFOLIO PAGE )
  
**/

jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. MENU
  /* ----------------------------------------------------------- */
      
    jQuery("#nav-icon").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeIn();
    });

    jQuery("#close-nav").click(function(e){
      e.preventDefault();
      jQuery("#menu-popup").fadeOut();
    });
 
  /* ----------------------------------------------------------- */
  /*  2. LIGHTBOX SLIDER ( INTEGRATED PORTFOLIO PAGE )
  /* ----------------------------------------------------------- */  

	$('.fashion .lightbox').littleLightBox();
	$('.travel .lightbox').littleLightBox();
	$('.food .lightbox').littleLightBox();
	$('.nature .lightbox').littleLightBox();
	
   /* ----------------------------------------------------------- */
  /*  3. SLICK SLIDER ( INTEGRATED PORTFOLIO PAGE )
  /* ----------------------------------------------------------- */  
	
	$('.stacks-wrapper').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '10px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  4. POPUP VIEW ( INTEGRATED PORTFOLIO PAGE ) 
	/* ----------------------------------------------------------- */ 
	
	$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><span class='stack-title-close'></span><div class='portfolio-popup-inner'></div></div></div>");
	
	// WHEN CLICK VIEW BUTTON 
	
	jQuery('.stack-title').on('click', function(event) {
	  event.preventDefault();
	  $('#portfolio-popup').addClass("portfolio-popup-show");
	  $('#portfolio-popup').animate({
	      "opacity": 1
	  },500);   
	  var portfolio_detailscontent = $(this).parent(".stack").html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);  
	  
	  // Dynamically call lightbox  
	  
	  $('.lightbox').littleLightBox();  
	
	});  
	       
	// WHEN CLICK CLOSE BUTTON
	
	$(document).on('click','.stack-title-close', function(event) {     
	    event.preventDefault();
		$('#portfolio-popup').removeClass("portfolio-popup-show");
		$('#portfolio-popup').animate({
		      "opacity": 0
	    },500);  
	
	});
	
	
});




