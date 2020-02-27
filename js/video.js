var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
	console.log("Play Video")
}

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate=video.playbackRate*0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate=video.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if(video.currentTime+60>video.duration){
		video.currentTime=0;
		video.playbackRate=1;
		video.pause()
	}
	else{
		video.currentTime +=60;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
  		video.muted=false;
  		document.querySelector("#mute").innerHTML="Mute";
  		console.log("Unmuted");}
  	else{
  		video.muted=true;
  		document.querySelector("#mute").innerHTML="Unmute";
      	console.log("Muted");
  	}
}

function changeVolume() {
	video.volume=document.querySelector("#volumeSlider").value/100;
	console.log("Volume is "+video.volume*100);
}
       

function gray() { 
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}
