var audio=document.querySelector('audio');
var playBtn=document.getElementById('play');
var pauseBtn=document.getElementById('pause');
var stopBtn=document.getElementById('stop');
var timeRange=document.getElementById('time');
var volumeRange=document.getElementById('volume');
var speedRange=document.getElementById('speed');


var imag = document.getElementsByTagName("img")[0];

var source = document.getElementsByTagName("source")[0];
var audioSor = document.getElementsByClassName("audioSor");
// console.log(audioSor[0]);

playBtn.addEventListener('click' ,function(){
    audio.play();
})
pauseBtn.addEventListener('click',function(){
    audio.pause()
})
stopBtn.addEventListener('click',function(){
    audio.load();
    audio.pause();
})
audio.addEventListener('durationchange',function(){
    timeRange.max=audio.duration;
})
timeRange.addEventListener('input',function(){
    audio.currentTime=timeRange.value;
})

audio.addEventListener('input', function(){
    // console.log(audio.currentTime);
    timeRange.value=audio.currentTime;
})

volumeRange.addEventListener('input',function(){
    audio.volume=volumeRange.value;
})

document.getElementById("mute").addEventListener('click', function(){
    audio.muted=!audio.muted;
})

// audioSor[0].style.backgroundColor='red';


for (let i = 0; i < 4; i++) {
    
    audioSor[i].addEventListener('click' , function(){
        imag.src =`imag/${i+2}.jpg`;
        source.src = `aubio/${i+2}.mp3`
        audio.load();
        audio.pause();  
        audio.play();
    })
       
}