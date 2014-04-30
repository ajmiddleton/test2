/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(compute);
  }

  function compute(){
    let [start, end, step] = $('#nums').val().split(',').map(n=>n.trim());
    let nums = _.range(start, end, step);
    nums.map(n=>Math.pow(n,4)).filter(n=>n%2).map(makeDiv);
  }

  function makeDiv(result){
    $('#results').append($('<div>').addClass('number-box').text(result));
  }
})();
