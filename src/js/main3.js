"use strict";

document.addEventListener('DOMContentLoaded', function() {
  //set up variables

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
  // get sound id and add click event
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
  // add click event for start buttonIdsvar startBtn = document.getElementById('start');
  var startBtn = document.getElementById('start');
  startBtn.addEventListener("click", start);

  //put 20 random ids  into simonArr for simon to play
  // for (var i = 0; i < 20; i++) {
  //   var randomBtnId = buttonIds[Math.floor(Math.random()*buttonIds.length)];
  //   simonArr.push(randomBtnId);
  // }
  function start() {
    var count = 0;
    simonArr = [];
    function simonPlay() {
      var randomBtnId = buttonIds[Math.floor(Math.random()*buttonIds.length)];
      simonArr.push(randomBtnId);
      count++;
      var interval = 1200; //  = 2s
      var increment = 1;
      simonArr.forEach(function(id){
        var runner = setTimeout(function(){
          simonPress(id);
          clearTimeout(runner);
        },  interval * increment++);
      });
      // setInterval(function(){
      //   if(countUp <= count){
      //     simonPress(simonArr[countUp]);
      //     console.log(simonArr[countUp]);
      //     countUp++;
      //   } else
      //       return;
      // }, 1000);
    }
    function simonPress(id) {
        var intervId;
        ++simonCount;

        switch(id){
          case blueButton:
            playBlue();
            id.className = "col-xs-6 gameBtn blueLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn blue");
            break;
          case redButton:
            playRed();
            id.className = "col-xs-6 gameBtn redLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn red");
            break;
          case greenButton:
            playGreen();
            id.className = "col-xs-6 gameBtn greenLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn green");
            break;
          case yellowButton:
            playYellow();
            id.className = "col-xs-6 gameBtn yellowLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn yellow");
            break;
        }
        function revertButton(buttonClass) {
          id.className = buttonClass;
        }
    }

    function blinkButton() {
      id.className = "col-xs-6 gameBtn blue"
    }

    while(count < 20 && reset === 0){
      //play the game
      simonPlay();
      ++count;
      //playerPlay();
    }
  }



});
