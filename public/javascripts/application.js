$(function()
  {
    $('.open h2, .open a.open-link').click(function(event){
      event.preventDefault();
      var hidden = $(this).parent().find('.hidden');
      console.log(hidden);
      if(hidden.is(':hidden')) {
        hidden.show('slow');
        hidden.parent().find('a.open-link').hide();
        hidden.parent().find('a.close-link').show();
      } else {
        hidden.parent().find('a.open-link').show();
        hidden.parent().find('a.close-link').hide();
        hidden.hide('slow');
      }
    });

    $('a.close-link').click(function(event){
      event.preventDefault();
      $(this).hide();
      $(this).parent().find('.hidden').hide();
      $(this).parent().find('a.open-link').show();
    });
    
    var countdown = $('#countdown');
    if (countdown.length !== 0)
    {
        var format = 'dHMS';
        if ($.browser.msie)
            format = 'dHM';
      countdown.countdown({until: new Date(2010, 12-1, 24, 9, 0, 0), timezone: +6, format: format});
    }

      function random_1_or_minus_1()
      {
          if (Math.random() - 0.5 >= 0) {
              return 1;
          } else {
              return -1;
          }
      }

        $('.banner')
            .css( {backgroundPosition: "0 0"} )
            .mouseover(function(){
                $(this).stop().animate(
                    {backgroundPosition:"(-500px -500px)"},
                    {duration:500})
                })
            .mouseout(function(){
                $(this).stop().animate(
                    {backgroundPosition:"(0 0)"},
                    {duration:500})
                })
  }
);
