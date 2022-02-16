song="";
song1="";
leftwristx=0;
rightwristx=0;
leftwristy=0;
rightwristy=0;
leftwristscore=0;
song1status="";
song2status="";
rightwristscore=0;
function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3");

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    song1status=song.isPlaying();
    song2status=song1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
        if(leftwristscore>0.2){
            circle(leftwristx,leftwristy,20);
            song.stop();
            if(song2status==false){
         song1.play();
         document.getElementById("song_name").innerHTML="Playing Peter Pan's song";
            }
        }
        if(rightwristscore>0.2){
            circle(rightwristx,rightwristy,20);
            song1.stop();
            if(song1status==false){
         song.play();
         document.getElementById("song_name").innerHTML="Playing Harry Potter Theme song";
         
        }
    }
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
 if(results.length>0){
     console.log(results);
     leftwristx=results[0].pose.leftWrist.x;
     rightwristx=results[0].pose.rightWrist.x;
     leftwristy=results[0].pose.leftWrist.y;
     rightwristy=results[0].pose.rightWrist.y;
     leftwristscore=results[0].pose.keypoints[9].score;
     rightwristscore=results[0].pose.keypoints[10].score;
 }
}