
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {



    // var blueButton =  document.getElementById("lcornerst");// get the button
    // blueButton.addEventListener("click",playSound);   // call playSound when clicked
    //
    // // create array of sounds
    // var soundArry = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
    //
    //
    // var sound = new Audio();         // create the audio
    // sound.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";  // set the resource location
    // sound.oncanplaythrough = function(){   // When the sound has completely loaded
    // sound.readyToRock = true;    // flag sound is ready to play
    // };
    //
    // sound.onerror = function(){      // not required but if there are problems this will help debug the problem
    //    console.log("Sound file SoundFileURL.mp3 failed to load.")
    // };
    //
    // // assuming sound is in scope from above code
    // function playSound(){
    // if(sound && sound.readyToRock){  // check for the sound and if it has loaded
    //     sound.currentTime = 0;       // seek to the start
    //     sound.play();                // play it till it ends
    //   }
    // }
    // var blueButton =  document.getElementById("lcornerst");// get the button
    // blueButton.addEventListener("click",play);  // call playSound when clicked
    var sound = document.getElementById("sound");
    function playSound() {
      sound.play();
    }

    sound.addEventListener("click", playSound);
    // var playButton =  document.getElementById("sound");
    // playButton.addEventListener("click", playSound;


    // create array of sounds
    var soundArray = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
    //assuming sound is in scope from above code
    // function playSound(soundName){
    //   console.log("blueButton Pressed");
    //
    // if(soundName && soundName.readyToRock){  // check for the sound and if it has loaded
    //     soundName.currentTime = 0;       // seek to the start
    //     soundName.play();                // play it till it ends
    //   }
    // }

    // function playSound(soundBlue){
    //   var soundName = soundBlue;
    //   console.log("blueButton Pressed");
    //
    // if(soundName && soundName.readyToRock){  // check for the sound and if it has loaded
    //     soundName.currentTime = 0;       // seek to the start
    //     soundName.play();                // play it till it ends
    //   }
    // }
    // function playSound() {
    //       var sound = document.getElementById("audio");
    //       sound.play();
    //   }



  });
