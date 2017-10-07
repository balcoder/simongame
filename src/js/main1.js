
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {
    //set up variables
    var count = 0;
    var simonCount = 0;
    var reset = 0;
    var simonArr = [];
    var playerArr = [];
    var blueButton = document.getElementById('blue');
    var redButton = document.getElementById('red');
    var greenButton = document.getElementById('green');
    var yellowButton = document.getElementById('yellow');
    var buttonIds = [blueButton, redButton, greenButton, yellowButton];
    // create array of sounds
    var soundArray = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];


    var blueSound = document.getElementById('audioBlue');
     blueButton.addEventListener("click",playBlue);
    function playBlue() {
      blueSound.play();
    }

    var redSound = document.getElementById('audioRed');
    redButton.addEventListener("click",playRed);
    function playRed() {
      redSound.play();
    }

    var greenSound = document.getElementById('audioGreen');
    greenButton.addEventListener("click",playGreen);
    function playGreen() {
      greenSound.play();
    }

    var yellowSound = document.getElementById('audioYellow');
    yellowButton.addEventListener("click",playYellow);
    function playYellow() {
      yellowSound.play();
    }
    var startBtn = document.getElementById('start');
    startBtn.addEventListener("click", start);

    function start() {
      count = 0;
      simonCount = 0;
      simonArr = [];
      function simonPlay() {
        var randomBtnId = buttonIds[Math.floor(Math.random()*buttonIds.length)];
        simonArr.push(randomBtnId);
        var countUp = 0;
        setInterval(function(){
          if(countUp < simonArr.length){
            simonPress(simonArr[countUp]);
            console.log(countUp);
            countUp++;
          } else
              return;
        }, 1000);
        // simonArr.forEach(function(id){
        //   setInterval(simonPress(id), 1000);
        // });
      }
      function simonPress(id) {
          var intervId;
          ++simonCount;

          switch(id){
            case blueButton:
              playBlue();
              break;
            case redButton:
              playRed();
              break;
            case greenButton:
              playGreen();
              break;
            case yellowButton:
              playYellow();
              break;
          }
      }

      while(count < 20 && reset === 0){
        //play the game
        simonPlay(buttonIds);
        ++count;
        //playerPlay();
      }
    }

    function playerPlay(){



    }
    function changeColor() {
      intervId = setInterval(flashBtn, 1000);
    }
    function flashBtn(id) {
      id.id = 'redSimon';
    }

  });
