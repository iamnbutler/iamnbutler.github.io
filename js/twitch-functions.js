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