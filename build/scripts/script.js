$(document).ready(() => {
  $('.js-lazy').each((index, el) => {
    const $image = $(el);
    const realSrc = $image.attr('data-src');

    $image.attr('src', realSrc);
  });
});

$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,  
        focusOnSelect: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,        
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
    
    $('.inline').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        vertical: false
      });

      $(function () {
        $('.popup-modal').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true
        });
      
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
      });
 });