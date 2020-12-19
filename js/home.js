$('a[href^="#"]').on("click",function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html, body").stop().animate({
            "scrollTop": $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };


$('#number1').jQuerySimpleCounter({end: 25,duration: 5000});
$('#number3').jQuerySimpleCounter({end: 17,duration: 5000});
$('#number4').jQuerySimpleCounter({end: 12,duration: 5000});



    /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  

