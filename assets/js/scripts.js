// Load Typekit junk
try{Typekit.load({ async: true });}catch(e){}

// Uncomment if using jQuery
$(document).ready(function(){
	var body = $('body');

	$('#menu').on('click', function(){
		body.toggleClass('state-nav-active');
		return false;
	});

});

// Grab most recent last.fm track
function recentTrack(JSONdata) {
  var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
  var ytSearch = oTrack.name + "+" + oTrack.artist["#text"];
  document.getElementById("artist").innerHTML = oTrack.artist["#text"];
  document.getElementById("song").innerHTML = oTrack.name;
  document.getElementById("song-link").href="https://www.youtube.com/results?search_query="+ ytSearch;
}