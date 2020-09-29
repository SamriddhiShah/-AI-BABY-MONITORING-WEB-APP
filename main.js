img = "";
objects=[];
status="";
var baby="...";
var song="";


function preload() {
    song = loadSound("new.mp3");

}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    cocossd= ml5.objectDetector('cocossd',modelLoaded );
    //cocossd.objectDetect(video,gotResult);
    document.getElementById("status").innerHTML="...";
    
    video= createCapture(VIDEO);
    video.parent('camera_two');
video.size(400,400);
video.hide();

}





function draw() {
    image(video, 0, 0, 400,400);
 








}

function gotResult(error ,result ){
 
     objects=result;
     if(objects.length==0){
        baby="Baby Missing!";
        console.log(baby);
        document.getElementById("status").innerHTML="Baby Missing!";
        //play();
        song.play();
     }
        else if(objects[0].label=="person"){
            baby="Baby Found!";
            console.log(baby);
            document.getElementById("status").innerHTML="Baby Found!";
        }
     
    
    }
   


function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    cocossd.detect(video, gotResult);
}



// function play() {
//     song.play();
//     song.setVolume(1);
//     song.rate(1);

// }