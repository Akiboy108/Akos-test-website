var playIcon = document.getElementById("playBtn");
var pauseIcon = document.getElementById("pauseBtn");
let songList = [];
let currentSongId = [];
let slider = document.getElementById("durationSlide");
let timer;
let currentCounter = 0;
let checkReplay = 0;
var songTitleList = document.getElementById("allSongsID");
songTable = 0;
let autoBtn = document.getElementById("autoBtn");

//hangerő ikon változása, hangerő érték tovább adása
function changeVolume() {
    
    var basicVolume = volumeSlide.value / 100;
    

    if (basicVolume < 0.01) {
        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "inline";
    }
    if (basicVolume > 0.01 && basicVolume <= 0.33) {
        vol1.style.display = "inline";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "none";
    }
    if (basicVolume > 0.33 && basicVolume <= 0.66) {
        vol1.style.display = "none";
        vol2.style.display = "inline";
        vol3.style.display = "none";
        vol0.style.display = "none";
    }
    if (basicVolume > 0.66 && basicVolume <= 1) {
        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "inline";
        vol0.style.display = "none";
    }
    currentVolume(basicVolume);
}

//kövi szám
function playNext() {

    currentSong.pause();
    currentSong.currentTime = 0;

    songList[currentCounter].classList.remove("current");
    currentCounter += 1;
    
    checkCurrent();
    PlayFunction();
    currentVolume();
    rangeSlider();
    console.log(currentSong.volume);
}

//előző szám
function playPrev() {
    currentSong.pause();
    currentSong.currentTime = 0;

    songList[currentCounter].classList.remove("current");
    
    currentCounter -= 1;

    checkCurrent();
    PlayFunction();
    currentVolume();
    rangeSlider();
}


//sorszám ellenőrzés és a 'current' kiválasztása
function checkCurrent() {
    if (currentCounter > document.getElementsByTagName("audio").length-1) { 
        currentCounter = 0;
    }
    if (currentCounter < 0) {
        currentCounter = document.getElementsByTagName("audio").length-1;
    }
    console.log(currentCounter);
    if (songList[currentCounter].classList.contains("current")) {
        currentSong = songList[currentCounter];
        playCurrent();
    }
}

//songList feltöltése
for (let i = 0; i < document.getElementsByTagName("audio").length; i++) {
    //console.log(songList[i].id, songList[i].className, songList[i].src);

    songList[i] = document.getElementsByTagName("audio")[i];
    currentSongId[i] = document.getElementsByTagName("audio")[i].id;
}



function PlayFunction() {

    timer = setInterval(rangeSlider, 1000);
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    songList[currentCounter].classList.add("current");
    //console.log(songList[currentCounter].classList);
    titles.innerHTML = songList[currentCounter].title;
    songCounter.innerHTML = currentCounter+1 + "/" + document.getElementsByTagName("audio").length;
    checkCurrent();
    
}



function currentVolume(bVol){
    currentSong.volume = bVol;
    console.log("VOLUME: " + currentSong.volume, bVol);
}
function playCurrent() {
    currentSong.play();
    currentVolume();
}
function PauseFunction() {
    pauseIcon.style.display = "none";
    playIcon.style.display = "inline";

    currentSong.pause();
}




function changeDuration(){
    console.log("currentTime: " + currentSong.currentTime);
    sliderPosition = currentSong.duration * (slider.value / 100);
    currentSong.currentTime = sliderPosition; 
}



function replayOff(){
    autoBtnOff.style.display = "none";
    autoBtnOn.style.display = "inline";
    autoBtnOn.style.background = "rgba(32, 93, 116, .8)";
}
function replayOn(){
    autoBtnOn.style.display = "none";
    autoBtnOff.style.display = "inline";
    autoBtnOff.style.background = "transparent";
}



function rangeSlider(){
    let position = 0;
    if(!isNaN(currentSong.duration)){
        position = currentSong.currentTime * (100 / currentSong.duration);
        slider.value = position;
        console.log('duration: '+currentSong.duration);
        console.log('slider value: '+slider.value);
        console.log('position: '+position);
        console.log('-----------------------------');
    }
    
    if(currentSong.ended){
        currentSong.currentTime = 0;
        position = 0;
        currentCounter += 1;
        position = 0;
        checkCurrent();
        PlayFunction();
    }
}  

function checkSongList(){
    
    if(songTable == 1){
        songTable = 0;
        songTitleList.style.display = "block";
    }
    else{
        songTable = 1;
        songTitleList.style.display = "none";
    }
}

