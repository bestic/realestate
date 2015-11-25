$(function() {

  $('.menu li').on('click', function(e) {

    if ($(e.target).closest('.sub-menu').length > 0) {
      return false;
    }

    $(this).toggleClass('active');

  });

  $('.navbar-toggle').on('click', function() {

    $('.nav-small ul').toggle();

  });

  $(document).on('click', function(e) {

    if ($(e.target).closest('.navbar-toggle').length === 0) {
      $('.nav-small ul').hide();
    }


  });

});
