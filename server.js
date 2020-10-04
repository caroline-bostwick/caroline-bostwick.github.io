var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname);
});

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET
});

spotifyApi.clientCredentialsGrant()
  .then(function(data) {

  spotifyApi.setAccessToken(data.body['access_token']);

}, function(err) {
  console.log('Something went wrong when retrieving an cess token', err.message);
});

app.get('', function (request, response) {

  spotifyApi.searchTracks('track:Dancing Queen', {limit:1})
      .then(function(data) {

      response.send(data.body.tracks.items[0]);

}, function(err) {
  console.error(err);
});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

