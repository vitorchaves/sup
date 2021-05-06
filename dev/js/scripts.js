$(document).ready(function () {

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


  $(".orbs > div").hover(function () {
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


});