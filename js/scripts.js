// Load Typekit junk
try{Typekit.load({ async: true });}catch(e){}

// Uncomment if using jQuery
$(document).ready(function(){
	var body = $('body');

	$('#menu').on('click', function(){
		body.toggleClass('state-nav-active');
		return false;
	});

	$('#full-view, #full-view-gallery').on('click', function(){
		$('#full-view-gallery').toggleClass('state-active');
		return false;
	});

});

// Grab most recent last.fm track
function recentTrack(JSONdata) {
  var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
  var ytSearch = oTrack.name + "+" + oTrack.artist["#text"];
  document.getElementById("track-artist").innerHTML = oTrack.artist["#text"];
  document.getElementById("track-track").innerHTML = oTrack.name;
  document.getElementById("track").href="https://www.youtube.com/results?search_query="+ ytSearch;
}

// Grab Instagram Posts
var userFeed = new Instafeed({
  get: 'user',
  userId: '276356813',
  accessToken: '276356813.1677ed0.1a062f2a7c2946b68ba74211c32d01aa',
  limit: 6,
  resolution: 'standard_resolution',
  template: '<div class="insta-item"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
});
userFeed.run();