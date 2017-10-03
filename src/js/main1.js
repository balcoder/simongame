
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {
    // var myAudio = document.getElementById('song');
    // document.addEventListener('click', play);
    // function play(){
    //   myAudio.play();
    // }
    var blueButton = document.getElementById('lcornerst');
    var blueSound = document.getElementById('audioBlue');
     blueButton.addEventListener("click",playBlue);
    function playBlue() {
      blueSound.play();
    }
    var redButton = document.getElementById('rcornerst');
    var redSound = document.getElementById('audioRed');
    redButton.addEventListener("click",playRed);
    function playRed() {
      redSound.play();
    }
    var greenButton = document.getElementById('lcornersb');
    var greenSound = document.getElementById('audioGreen');
    greenButton.addEventListener("click",playGreen);
    function playGreen() {
      greenSound.play();
    }
    var yellowButton = document.getElementById('rcornersb');
    var yellowSound = document.getElementById('audioYellow');
    yellowButton.addEventListener("click",playYellow);
    function playYellow() {
      yellowSound.play();
    }

  //  var isPlaying = false;
   //
  //  function togglePlay() {
  //      if (isPlaying) {
  //          myAudio.pause();
  //      } else {
  //          myAudio.play();
  //      }
  //  };
  //  myAudio.onplaying = function() {
  //      isPlaying = true;
  //  };
  //  myAudio.onpause = function() {
  //      isPlaying = false;
  //  };

    // create array of sounds
    var soundArray = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];


  });
