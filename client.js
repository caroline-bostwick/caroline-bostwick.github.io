$(function() {
    
  $.get('/myendpoint', function(data) {
    // "Data" is the track object we get from the API. See server.js for the function that returns it.
    console.log(data)
    
    // Display the track name
    $('#data-container').text(data.name);
    
    // Display the album art
    var img = $('<img id="albumart"/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#data-container');
  });

});
