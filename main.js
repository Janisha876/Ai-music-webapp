song="";
song1="";
leftwristx=0;
rightwristx=0;
leftwristy=0;
rightwristy=0;
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
 }
}