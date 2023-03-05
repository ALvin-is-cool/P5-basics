function preload (){}

function setup(){
canvas=createCanvas(500,500);// this creates canvasblue=var
canvas.position(200,280);// tnis angels it
video=createCapture(VIDEO);//this give video
video.hide();
tint_color="";
}


//yelow=functions
function draw(){
image(video,0,0,500,500);
tint(tint_color);//tint function is made to change the color


}

function apply_filter(){
tint_color=document.getElementById("color").value;//takeig value from input box


}


function take_snapshot(){
save("Sub to alvin not the chipmunk.png");// saveing pic 



}