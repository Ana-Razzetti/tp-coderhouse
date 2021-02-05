// Scripts Back to top button 
    var mybutton = document.getElementById("myBtn");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
 

// Sticky Navbar 

  
    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
      });
    });

 // Scrolling Effect

    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      }

      else {
        $('nav').removeClass('black');
      }
    })


 // Efecto show 

  
    $(document).ready(function () {

      $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.show').each(function (i) {

          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window > bottom_of_object) {

            $(this).animate({ 'opacity': '1' }, 500);

          }

        });

      });

    });


//Efecto Contador 

    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
        {
          duration: 5000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
 
    //

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
