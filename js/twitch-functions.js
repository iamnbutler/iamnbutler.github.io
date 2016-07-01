// Is twitch channel live?
$.getJSON('https://api.twitch.tv/kraken/streams/then8show', function(channel) {
    console.log('works');
    if (channel["stream"] == null) {
        // Channel is not live
        $('#twitch-live').html('<h1>NOT LIVE<h1>');
    } else {
      // Channel is live
      $('#twitch-live').html('<h1>LIVE<h1>');
    }
});