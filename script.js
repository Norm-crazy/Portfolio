$( document ).ready(function() {

  $( "#htmlBtn" ).click(function() {
    $(".js").fadeOut();
    if($('.html').css('display') == 'none')
      {
        $('.html').fadeIn(1000);
      }
  });

  $( "#jsBtn" ).click(function() {
    $(".html").fadeOut();
    if($('.js').css('display') == 'none')
      {
        $('.js').fadeIn(1000);
      }
  });

  $("#allbtn").click(function(){
    $('.js').fadeIn(1000);
    $('.html').fadeIn(1000);
  });

});
