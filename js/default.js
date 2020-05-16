$(function () {
  // Definir playlist
  var playlist = [
    {
      artist: "Purrple cat",
      title: "Equinox",
      mp3: "songs/purrple-cat-equinox.mp3",
    },
    {
      artist: "Purrple cat",
      title: "Frolic",
      mp3: "songs/purrple-cat-frolic.mp3",
    },
    
    {
        artist: "Purrple cat",
        title: "Wishing Well",
        mp3: "songs/purrple-cat-wishing-well.mp3",
      },
  ];
  var currentTrack = 0;
  var numTracks = playlist.length;

  var player = $(".player").jPlayer({
    ready: function () {
      // configura a faixa inicial do jPlayer
      player.jPlayer("setMedia", playlist[currentTrack]);
  
      // reproduzir a faixa atual. Se não quiser que o player comece a tocar automaticamente;
      // retirar esta linha
      player.playCurrent();
    },
    ended: function () {
      // quando terminar de tocar uma música, ir para a próxima
      $(this).playNext();
    },
    play: function () {
      // quando começar a tocar, escrever o nome da faixa sendo executada
      $('.player-current-track').text(playlist[currentTrack].artist+' - '+ playlist[currentTrack].title+' - '+playlist[currentTrack].album);
      
    },
    swfPath: "js/plugins/jplayer/dist/jplayer/jquery.jplayer.swf",
    supplied: "mp3",
    cssSelectorAncestor: "",
    cssSelector: {
      play: ".player-play",
      pause: ".player-pause",
      stop: ".player-stop",
      seekBar: ".player-timeline",
      playBar: ".player-timeline-control",
    },
    size: {
      width: "1px",
      height: "1px",
    },
  });
  
  player.playCurrent = function () {
    player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
  };
  
  player.playNext = function () {
    currentTrack = currentTrack == numTracks - 1 ? 0 : ++currentTrack;
    player.playCurrent();
  };
  
  player.playPrevious = function () {
    currentTrack = currentTrack == 0 ? numTracks - 1 : --currentTrack;
    player.playCurrent();
  };
  
  $(".player-next").click(function () {
    player.playNext();
  });
  
  $(".player-prev").click(function () {
    player.playPrevious();
  });
  
});


