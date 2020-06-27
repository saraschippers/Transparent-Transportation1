var videoOpacity = 1;

let filmpje;
let mic;
let vol;
var opacityfilm = 1;
var speed = 0.001;

function setup() {
  frameRate(60);
  mic = new p5.AudioIn();  //this is where the microphone is introduced
  mic.start();  //this is where the microphone starts working
}

function draw() {
changeVideo();
 }

function changeVideo() {
  var vol = mic.getLevel();  //this is where the volume level gets measured
  console.log("Input Volume is " + vol); //this displays the numbers of the volume

        //this is where the mouse in the face rectangle makes the video go transparent
  if (vol > 0.01 && opacityfilm>= 0){
    opacityfilm -= speed;               //stapjes van opacity change
    videoOpacity = opacityfilm;
    changeOpacity();
    //console.log (opacityfilm);
  }
  else if (opacityfilm <= 1 && vol < 0.01){
    opacityfilm += speed/2;               //stapjes van opacity change positief
    videoOpacity = opacityfilm;
    changeOpacity();
    //console.log (opacityfilm);
  }
}

function changeOpacity() {
  var streams = document.getElementsByClassName('partnerCanvas');
  for(i = 0; i < streams.length; i++) {
    streams[i].style.filter = `opacity(${videoOpacity})`;
    console.log("Changed Opacity");
  }
}

function mouseClicked(){
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}


// function myFunction() {
//   console.log("button Clicked");
//   var x = document.createElement("BUTTON");
//   var t = document.createTextNode("Click me");
//   x.appendChild(t);
//   // document.body.appendChild(x);
//
//   $( '.informationSign' ).append(x);
// }
