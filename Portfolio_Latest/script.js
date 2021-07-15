
$(function () {
  function animate() {
    $(".name").animate({ 'font-size': '90px' }, 1400)
    $(".subtitle").animate({ 'font-size': '30px' }, 1400)
  }
  animate();
  $(window).resize(function () {
    animate()
  })

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
    
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
       
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        if (target.length) {
         
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
         
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
              return false;
            } else {
              $target.attr('tabindex', '-1'); 
              $target.focus(); 
            };
          });
        }
      }
    });


});
