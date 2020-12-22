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
  

(function() {
  // Prelodr Example
  // ---------------

  // Definition
  const pre = prelodr()
  
  pre.on('shown', function() {
    console.log('shown!')
  })

  pre.on('hidden', function() {
    console.log('hidden!')
  })
  
  // Click Event
  const btn = document.getElementById('my-btn')
  btn.addEventListener('click', function() {

    // In action
    pre
      .show('Initializing...')
      .hide(function(done) {
        console.info('1 second delay...')
          // Simulate 1 second delay
        setTimeout(done, 1000)
      })

    .show('Processing...')
      .hide(function(done) {
        console.info('1 seconds delay...');
        // Simulate 2 seconds delay
        setTimeout(done, 1000)
      })

    .show('<b>Finishing...</b>').hide();

  }, false)

})(window)

/*
https://github.com/daybrush/scenejs
*/
const scene = new Scene({
  ".container": {}
}, {
  selector: true,
});

const item = scene.getItem(".container");


function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      }
    }),
  });
}

move(0, 0, 90, 115, 0, 5);
move(1, 1, 90, 115, 0, 2);
move(2, 3, 0, 115, 0, 1);
move(4, 4.5, -100, 0, -90, 2);
move(5.5, 6, -52, -18, -90, 1.6);
move(7, 7.5, 30, 45, 0, 2);
move(8.5, 9,  10, 30, 0, 3);
move(10, 10.5, 28, 0, 0, 2.2);
move(11.5, 12, 50, -35, 0, 1.65);
move(13, 13.5, 35, -70, 0, 2);
move(14.5, 18, 0, 0, 0, 1);
