leftwrist_x=0;
leftwrist_y=0;
rightwrist_x=0;
rightwrist_y=0;
score_leftwrist=0;
score_rightwrist=0;
function preload(){
song_1=loadSound('music.mp3');
song_2=loadSound('music2.mp3');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',got_results);
}
function modelloaded(){
    console.log("model loaded");

}

function draw(){
image(video,0,0,300,300);
}
function got_results(results){
    console.log(results);
    leftwrist_x=results[0].pose.leftWrist.x;
    leftwrist_y=results[0].pose.leftWrist.y;
    rightwrist_x=results[0].pose.rightWrist.x;
    rightwrist_y=results[0].pose.rightWrist.y;
    score_leftwrist=results[0].pose.keypoints[9].score;
    score_rightwrist=results[0].pose.keypoints[10].score;
    if(score_leftwrist>0.2){
        document.getElementById("songname_result").innerHTML="Peter Pan";
        circle(leftwrist_x,leftwrist_y,20);
        song_2.stop();
        song_1.play();
    }
    if(score_rightwrist>0.2){
        document.getElementById("songname_result").innerHTML="Harry potter";
        circle(rightwrist_x,rightwrist_y,20);
        song_1.stop();
        song_2.play();
    }
    }
