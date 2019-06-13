'use strict';

$(document).ready(function play() {
  let color = 'black';
  $('.column').click(function() {
    $(this).prepend(`<div class="disc ${color}"></div>`);
    if (color === 'red') {
      color = 'black';
    } else {
      color = 'red';
    }
    });
});

/*    $(document).ready(function(){
        let max = 5;
        let divCount = $('.column').size();

//does this ('.column').size(); target the divs that are being created?? or does should I target the number with '<div  class="disc ${color}"></div>`? I'm not sure how to target the number of divs within .columns and then prevent the function 'play' from continuing. I want to limit the number of clicks within a clumn to 5.

        if (divCount === max) {
            $(play () {
                $('play').off('click');
            })
            else {

            }
        }
    })*/

    //maybe instead of targeting divs, I could create a number at the bottom of each column with opacity 0 using a += thingy that increases on clicks, and when that number is 5, it disables the click. 
