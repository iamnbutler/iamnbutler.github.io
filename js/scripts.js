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
var cTrack = $("#track");
function recentTrack(JSONdata) {
  var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
  var ytSearch = oTrack.name + "+" + oTrack.artist["#text"];
  document.getElementById("track-artist").innerHTML = oTrack.artist["#text"];
  document.getElementById("track-track").innerHTML = oTrack.name;
  cTrack.href="https://www.youtube.com/results?search_query="+ ytSearch;
  cTrack.attr("title", oTrack.name).attr("artist", oTrack.artist["#text"]);
}

// Search YT and grab video from last.fm track
var embed = $("#yt-track-inject");

function populateModalVideo(node) {
    var title = node.attr('title'); // Set title
    var artist = node.attr('artist'); // Set plays

    // Query YT for song name
    query = title + " - " + artist;
    ytKeyWordsearch(query);
  }

  //-- YT: Search for song title
  function ytKeyWordsearch(query){
    gapi.client.setApiKey('AIzaSyCcoMFVU1juK4tpcn3OhQEb9QUO9rZVVFA');
    gapi.client.load('youtube', 'v3', function() {
            makeYTRequest(query);
    });
  }
  //-- YT: Use videoId to create embed link
  function makeYTRequest(query) {
    var q = query;
    var request = gapi.client.youtube.search.list({
               q: q,
            part: 'snippet',
            maxResults: 1
    });
    request.execute(function(response) {
            var videoId = response.result.items[0].id.videoId
            var embedHtml = '<iframe width="284" height="160" src="https://www.youtube.com/embed/' + videoId +'?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
            embed.html(embedHtml);
    });
  }

  $("#track").on( 'click', function(){
    var node = $(this);

    $(".track-player").fadeIn(200);
    // Populate modal content
    // populateModalInfo(node);
    populateModalVideo(node);
    return false;
  });

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

// JParallax
jQuery('.parallax-layer').parallax({
  mouseport: jQuery("#port")
})