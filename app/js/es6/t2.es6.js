/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(getCams);
  }

  function getCams(){
    let zip = $('#zip').val().trim();
    let url = `http://api.wunderground.com/api/6a50cc2bf300d4db/webcams/q/${zip}.json?callback=?`;
    console.log(url);
    $.getJSON(url, data=>{
      data.webcams.map(appendImg);
    });
  }

  function appendImg(data){
    let url = `http://www.wunderground.com/webcams/${data.handle}/1/video.html?month=04&year=2014&filename=current.mp4`;
    let link = $('<a>').attr('href', url).append($('<img>').attr('src', data.WIDGETCURRENTIMAGEURL));
    $('#results').append(link);
  }
})();
