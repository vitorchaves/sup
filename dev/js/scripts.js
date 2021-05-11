$(document).ready(function () {

  $(".responsive-menu").click(function () {
    $(this).toggleClass('opened');
    var $menu = $(".responsive-menu + nav");

    function toggleMenu(menu) {
      if (menu.hasClass('opened')) {
        $menu.stop().slideDown('slow').css('display', 'flex');
      } else {
        $menu.stop().slideUp('slow');
      }
    }

    toggleMenu($(this));
  });

  var nav = $('header menu');

  if ($(this).scrollTop() > 150) {
    nav.addClass("slim");
    $('body').css('padding-top', 80);
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      nav.addClass("slim");
      $('body').css('padding-top', 80);
    } else {
      nav.removeClass("slim");
      $('body').css('padding-top', 120);
    }
  });


  var $maImage = $(".ma-image");

  function floatingImage(image) {
    image.animate({
      top: 20
    }, 2500);

    setTimeout(function () {
      image.animate({
        top: 0
      }, 2500);
      setTimeout(floatingImage(image), 2500);
    }, 2500)
  }

  floatingImage($maImage);


  function changeText(title, info) {
    var $titulo = $(".stage h3"),
      $detalhe = $(".stage p");

    $titulo.stop().fadeOut(300);
    $detalhe.stop().fadeOut(300);

    setTimeout(function () {
      $titulo.html(title);
      $detalhe.html(info);
      $titulo.stop().fadeIn(300);
      $detalhe.stop().fadeIn(300);
    }, 300);
  }


  var counter = 1;
  $(".products-circle .orbs div").each(function () {
    $(this).attr('data-position', counter);
    counter++;
  });

  var paused = false;
  var position = 1;
  setInterval(function () {
    if (!paused) {
      $(".products-circle .orbs div").each(function () {
        if ($(this).data('position') == position) {
          $(this).trigger('click');
        }
      });

      if (position === 8) {
        position = 0;
      }
      position++;
    }
  }, 5000);

  function blink(target) {
    if (paused) {
      setTimeout(function () {
        target.fadeOut('fast');
      }, 0);

      setTimeout(function () {
        target.fadeIn('fast');
      }, 1000);

      setTimeout(function () {
        blink(target);
      }, 2000);
    }
  }


  $(".products-circle").hover(function () {
    paused = true;
    var $element = $(this).find('.stage h6.info');

    $element.stop().fadeIn('fast');

    setTimeout(function () {
      blink($element);
    }, 5000);
  }, function () {
    paused = false;
    $(this).find('.stage h6.info').stop().fadeOut('fast');
  });

  $(".orbs > div").click(function () {
    if (!$(this).hasClass("active")) {
      $(".orbs > div").removeClass('active');
      $(this).addClass('active');
      changeText($(this).find('img').attr('title'), $(this).find('img').data('info'));
    }
  });

  $(".contactArea form input, .contactArea form textarea, .contactArea form select").focus(function () {
    $(this).siblings('label').css({
      top: '2px',
      fontSize: '10px',
      color: '#333',
      background: 'transparent',
      width: 'auto'
    });
  });

  $(".contactArea form input, .contactArea form textarea, .contactArea form select").focusout(function () {
    if ($(this).val() == "") {
      $(this).siblings('label').css({
        top: '8px',
        fontSize: '16px',
        color: '#b9b9b9',
        background: 'white',
        width: '80%'
      });
    }
  });

  var options = {
    onKeyPress: function (telefone, e, field, options) {
      var masks = ['(00) 0000-00000', '(00) 00000-0000'];
      var mask = (telefone.length > 14) ? masks[1] : masks[0];
      $('#telefone').mask(mask, options);
    }
  };

  $('#telefone').mask('(00) 0000-0000', options);


  var $doc = $('html, body');
  $('.scrollTo').click(function () {
    $doc.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  $('.clientes').owlCarousel({
    loop: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 2
      },
      575: {
        items: 3
      },
      768: {
        items: 4
      },
      1000: {
        items: 5
      },
      1200: {
        items: 6,
        nav: true
      }
    }
  })

});