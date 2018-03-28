
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: { 
      'autoplay': 1, 
      'controls': 0, 
      'modestbranding': 1,
      'showinfo': 0, 
      'rel': 0},
    videoId: 'c7D7yH0PDhQ',
    events: {
      'onReady': onPlayerReady
    },
    'loop': 1,
    'allowfullscreen': 'allowfullscreen'
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
  launchIntoFullscreen(event)
}