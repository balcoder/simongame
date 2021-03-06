"use strict";

document.addEventListener('DOMContentLoaded', function() {
  //set up variables

  //var simonCount = 0;
  var reset = 0;
  var simonArr = [];
  var playerArr = [];
  var playerCnt = 0;
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
    playerArr.push(blueButton);
    playerCnt++;
    checkSeq(blueButton);
  }

  var redSound = document.getElementById('audioRed');
  redButton.addEventListener("click",playRed);
  function playRed() {
    redSound.play();
    //console.log(this.id);
    var kkk = this.id;
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

  // check for correct sequence of presses
  function checkSeq(btnPressed){
    //compare sequence of this buttonclick id with simonArr
    //simonArr[0].id
    if(playerCnt > 0 && btnPressed === simonArr[playerCnt - 1]){

    }
  }

  function start() { // when start button pressed
    var count = 0;
    simonArr = []; // reset array

    while(count < 2 ){
      //play the game
      simonPlay();
      ++count;
      console.log("Great it works");
      //playerPlay();
    }
    // gets random button, adds to array and sets timeout for simonPress()
    function simonPlay() {
      var randomBtnId = buttonIds[Math.floor(Math.random() * buttonIds.length)];
      simonArr.push(randomBtnId);
      //count++;
      var interval = 1200;
      var increment = 1;
      simonArr.forEach(function(id){
        //var saveMe = increment;
        var runner = setTimeout(function(){
          simonPress(id);
          clearTimeout(runner);
          //console.log(increment+" "+ saveMe);
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
    // takes an id, plays sound and flashes button
    function simonPress(id) {
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

  }



});
