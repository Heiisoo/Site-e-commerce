/* Show and hide menu*/

$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    if($(window).scrollTop() < 80 ) {

      $('.navbar').css ({
        'margin-top': '-100px',
          'opacity': 'o'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59 , 59, 0)'

      });

    } else {
      
      $('.navbar').css ({
        'margin-top': '0px',
          'opacity': '1'

            });

            $('.navbar-default').css({
              'bacground-color': 'rgba(59, 59 , 59, 0.7)'
              'border-color': '#444'
            })

    }

  });

});
