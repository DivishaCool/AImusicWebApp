function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



  function copy_text() {

    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  song1 = "";
  song2 = "";

  song1_status = "";
  song2_status = "";

  rightWristX = 0;
  rightWristY = 0;

  leftWristX = 0;
  leftWristY = 0;

  function preload(){
    song1.loadSound("music.mp3");
    song2.loadSound("music2.mp3");

  }

  function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function draw(){
    image( video ,0 , 0 , 600 , 500);
  }

  function modelLoaded(){
    console.log("Model is Initialized!");
  }

  function gotPoses(results , error){
    if(results.length>0){
      console.log(results);
    }

    else{
      console.error(error);
    }
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x is "+leftWristX+"left wrist y is"+leftWristY );
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x is"+rightWristX+"right wrist y is"+rightWristY);

  }
