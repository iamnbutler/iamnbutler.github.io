//        .-') _    ('-.     .-') _     ('-.        .-. .-')               .-') _               ('-.  _  .-')
//       ( OO ) )  ( OO ).-.(  OO) )  _(  OO)       \  ( OO )             (  OO) )            _(  OO)( \( -O )
//   ,--./ ,--,'   / . --. //     '._(,------.       ;-----.\  ,--. ,--.  /     '._ ,--.     (,------.,------.
//   |   \ |  |\   | \-.  \ |'--...__)|  .---'       | .-.  |  |  | |  |  |'--...__)|  |.-')  |  .---'|   /`. '
//   |    \|  | ).-'-'  |  |'--.  .--'|  |           | '-' /_) |  | | .-')'--.  .--'|  | OO ) |  |    |  /  | |
//   |  .     |/  \| |_.'  |   |  |  (|  '--.        | .-. `.  |  |_|( OO )  |  |   |  |`-' |(|  '--. |  |_.' |
//   |  |\    |    |  .-.  |   |  |   |  .--'        | |  \  | |  | | `-' /  |  |  (|  '---.' |  .--' |  .  '.'
//   |  | \   |    |  | |  |   |  |   |  `---.       | '--'  /('  '-'(_.-'   |  |   |      |  |  `---.|  |\  \
//   `--'  `--'    `--' `--'   `--'   `------'       `------'   `-----'      `--'   `------'  `------'`--' '--'

// Load Typekit junk
try{Typekit.load({ async: true });}catch(e){}

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

// Twitch Functions

// Is twitch channel live?
$.getJSON('https://api.twitch.tv/kraken/streams/then8show', function(channel) {
    if (channel["stream"] == null) {
      // Channel is not live
      console.log("Nate currently isn't live on Twitch, be sure to check back later!");
    } else {
      // Channel is live
      // $('#twitch-live').html('<p><i class="fa fa-fw fa-video-camera fa-live"></i> Nate is currently live on Twitch! Come join the stream <i class="fa fa-fw fa-angle-double-right"</i><p>');
      $('#nav-stream').html('<i class="fa fa-fw fa-bolt"></i> Stream');
    }
});