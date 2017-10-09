// When start button is pressed call simonPlay() to add a random button id to
// the simon array and play that sequence with timeouts
// When button is clicked play the audio, increment the counter and check the
// that the sequence matches the simon array
"use strict";

document.addEventListener('DOMContentLoaded', function() {
  //set up variables
  var reset = 0;
  var simonArr = [];
  var playerArr = [];
  var playerCnt = 0;
  // get the id's of all the buttons
  var blueButton = document.getElementById('blue');
  var redButton = document.getElementById('red');
  var greenButton = document.getElementById('green');
  var yellowButton = document.getElementById('yellow');
  var buttonIds = [blueButton, redButton, greenButton, yellowButton];
  // get the id's of all the audio
  var blueSound = document.getElementById('audioBlue');
  var redSound = document.getElementById('audioRed');
  var greenSound = document.getElementById('audioGreen');
  var yellowSound = document.getElementById('audioYellow');
  // add click event for start button
  var startBtn = document.getElementById('start');
  startBtn.addEventListener("click", start);

  blueButton.addEventListener("click",playBlue);
  function playBlue() {
    blueSound.play();
    playerArr.push(blueButton);
    playerCnt++;
    checkSeq(blueButton);
  }

  redButton.addEventListener("click",playRed);
  function playRed() {
    redSound.play();
    playerArr.push(redButton);
    playerCnt++;
    checkSeq(redButton);
  }

  greenButton.addEventListener("click",playGreen);
  function playGreen() {
    greenSound.play();
    playerArr.push(greenButton);
    playerCnt++;
    checkSeq(greenButton);
  }

  yellowButton.addEventListener("click",playYellow);
  function playYellow() {
    yellowSound.play();
    playerArr.push(yellowButton);
    playerCnt++;
    checkSeq(yellowButton);
  }

  // check for correct sequence of presses
  function checkSeq(btnPressed){
    //compare sequence of this buttonclick id with simonArr
    //simonArr[0].id
    // if(btnPressed != simonArr[playerCnt - 1]){
    if(comparePressed(btnPressed) && playerArr.length !== simonArr.length){
        //do nothing
    } else if (!comparePressed(btnPressed)) {
      simonReplay();
    } else {
      simonPlay();
    }
  }

  function comparePressed(btnPressed) {
    var i = simonArr.length;
    if (simonArr[playerCnt-1] === btnPressed){
      return true;
    } else{
      return false;
    }
  }




  // when start button pressed
  function start() {
    var count = 0;
    playerCnt = 0;
    simonArr = []; // reset array
    simonPlay();
    ++count;
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

    }
    // replay the sequence when player gets it wrong
    function simonReplay() {
      playerCnt = 0;
      playerArr = [];
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
    }
    // takes an id, plays sound and flashes button
    function simonPress(id) {
        switch(id){
          case blueButton:
            //playBlue();
            blueSound.play();
            id.className = "col-xs-6 gameBtn blueLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn blue");
            break;
          case redButton:
            //playRed();
            redSound.play();
            id.className = "col-xs-6 gameBtn redLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn red");
            break;
          case greenButton:
            //playGreen();
            greenSound.play();
            id.className = "col-xs-6 gameBtn greenLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn green");
            break;
          case yellowButton:
            //playYellow();
            yellowSound.play();
            id.className = "col-xs-6 gameBtn yellowLight";
            setTimeout(revertButton, 1000, "col-xs-6 gameBtn yellow");
            break;
        }
        function revertButton(buttonClass) {
          id.className = buttonClass;
        }
    }





});
