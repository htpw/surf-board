let player;
const playerContainer = $('.player');
const heightVideo = parseInt($(playerContainer).css("height"));
const widthVideo = parseInt($(playerContainer).css("width"));

$(".player__volume-value").click(e => {
  const barVolume = $(e.currentTarget);
  const clickedPositionVolume = e.originalEvent.layerX;
  const newVolumePositionPercent = (clickedPositionVolume / barVolume.width()) * 100;

  $(".player__volume-button").css({
    left: `${newVolumePositionPercent}%`
  });

  player.setVolume(newVolumePositionPercent);
});

$(".player__volume-icon").click(e => {
  const muteIcon = $(e.currentTarget);

  if (muteIcon.hasClass("active")) {
    player.mute();
    $(".player__volume-button").css({
      left: `0%`
    });
    muteIcon.removeClass("active");
  } else {
    player.unMute();
    player.setVolume(100);
    $(".player__volume-button").css({
      left: `100%`
    });
    muteIcon.addClass("active");
  }
});

let eventsInit = () => {
  $(".player__start").click(e => {
    e.preventDefault();

    const btn = $(e.currentTarget);

    if (playerContainer.hasClass("paused")) {
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playerContainer.addClass("paused");
      player.playVideo();
    }
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.seekTo(newPlaybackPositionSec);
  });
};

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });
  }, 1000);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: heightVideo,
    width: widthVideo,
    videoId: '86E7FuIfo_k',
    events: {
      'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0,
      iv_load_policy: 3
    }
  });
}

eventsInit();