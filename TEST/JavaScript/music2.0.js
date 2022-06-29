Play = document.querySelector('#playBtn');
document.getElementsByClassName('music')[0].classList.add('current');
songs = [document.querySelector('.music')];
let currentSong = document.querySelector('.current');
position.max = currentSong.duration;

var busy = false;
let i = 0;
let lastVol = 0; //saves the last volume before mute
currentCounter = 0;
let basicVol; //saves the last volume before skip song

/*function getAllSong(){
    for(i = 0; i < document.getElementsByClassName('music').length; i++){
        songList[i] = document.getElementsByClassName('music')[i];//console.log(songList[i]);
    }
}*/
function setPrev(){
    currentSong.classList.remove('current');
    Play.classList.add("active");
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    basicVol = currentSong.volume;
    currentSong.pause();
    currentSong.currentTime = 0;    
    currentCounter--;
    
    if(currentCounter < 0){
        currentCounter = document.getElementsByClassName('music').length-1;
    }
    
    songList[currentCounter].classList.add('current');
    currentSong = document.querySelector('.current');
    position.max = currentSong.duration;
    songCounter.innerHTML = currentSong.id + "/" + document.getElementsByClassName('music').length;
    titles.innerHTML = currentSong.title;
    currentSong.volume = basicVol;
    
    position.addEventListener("input", function() {
        busy = true;
        positionText.innerHTML = toTimeString(position.value);
    });
    
    position.addEventListener("change", function() {
        busy = false;
        currentSong.currentTime = position.value;
    }); 
}

function setNext(){
    currentSong.classList.remove('current');
    Play.classList.add("active");
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    basicVol = currentSong.volume;
    currentSong.pause();
    currentSong.currentTime = 0;
    currentCounter++;
    
    if(currentCounter > document.getElementsByClassName('music').length-1){
        currentCounter = 0;
    }
    
    songList[currentCounter].classList.add('current');
    currentSong = document.querySelector('.current');
    songCounter.innerHTML = currentSong.id + "/" + document.getElementsByClassName('music').length;
    titles.innerHTML = currentSong.title;
    currentSong.volume = basicVol;
    position.addEventListener("input", function() {
        busy = true;
        positionText.innerHTML = toTimeString(position.value);
        
    });
    
    position.addEventListener("change", function() {
        busy = false;
        currentSong.currentTime = position.value;
        
    
    });
}

currentSong.addEventListener("loadedmetadata", function() {
    console.log(songs);
});

function changeVolume(){
    Volume = volume.value/100;
    console.log(Volume);
    if (Volume < 0.01 ){
        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "inline";
    }
    if (Volume >= 0.01 && Volume <= 0.33) {
        vol1.style.display = "inline";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "none";
    }
    if (Volume > 0.33 && Volume <= 0.66) {
        vol1.style.display = "none";
        vol2.style.display = "inline";
        vol3.style.display = "none";
        vol0.style.display = "none";
    }
    if (Volume > 0.66 && Volume <= 1) {
        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "inline";
        vol0.style.display = "none";
    }
}

function select0thSong(){
    for(i = 0; i < document.getElementsByClassName('music').length; i++){
        songList[i] = document.getElementsByClassName('music')[i];//console.log(songList[i]);
        if(songList[i].classList.contains('current')){
            currentSong = songList[i];
            
        }
        
    }
    titles.innerHTML = currentSong.title;
    console.log(currentSong);
}

// Set song's duration


Play.addEventListener("click", function() {
    if (currentSong.paused) {
      currentSong.play();
      Play.classList.add("active");
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
      songCounter.innerHTML = currentSong.id + "/" + document.getElementsByClassName('music').length;
    } 
    else {
      currentSong.pause();
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
      Play.classList.remove("active");
    }
});

//-------P L A Y  P R E V I O U S  S O N G--------
previousSong.addEventListener('click', e =>{
    currentSong.play();
});
//-------P L A Y  N E X T  S O N G--------
nextSong.addEventListener('click', e => {
    currentSong.play();
});
function toTimeString(sec) { //?????????????????????
    return new Date(sec * 1000).toISOString().slice(11, -5);
}
currentSong.addEventListener("timeupdate", function(e) {
    if (!busy) {
      position.value = currentSong.currentTime;
      positionText.innerHTML = toTimeString(currentSong.currentTime);
      
    }  
});
  

//-------S K I P  T O  N E X T  S O N G  W H E N  E N D E D---------
currentSong.addEventListener("ended", function() {
    position.value = 0;
    currentSong.classList.remove('current');
    Play.classList.add("active");
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    basicVol = currentSong.volume;
    currentSong.pause();
    currentSong.currentTime = 0;
    currentCounter++;

    if(currentCounter > document.getElementsByClassName('music').length-1){
        currentCounter = 0;
    }

    songList[currentCounter].classList.add('current');
    currentSong = document.querySelector('.current');
    songCounter.innerHTML = currentSong.id + "/" + document.getElementsByClassName('music').length;
    titles.innerHTML = currentSong.title;
    currentSong.volume = basicVol;
    currentSong.play();
});

// user is setting position
position.addEventListener("input", function() {
    busy = true;
    positionText.innerHTML = toTimeString(position.value);
    
});

position.addEventListener("change", function() {
    busy = false;
    currentSong.currentTime = position.value;
    

});

volume.addEventListener("input", function() { // volume 0.0 to 1.0
    
    currentSong.volume = volume.value / 100;
    volumeText.innerHTML = (1 * volume.value).toFixed() + "%";
    
});

//________________________________If click on Volume buttons_____________________________________

vol1.addEventListener('click', e => {// Vol1 Button
    lastVol = currentSong.volume;
    console.log(lastVol);

    if(currentSong.volume >= 0.01){
        currentSong.volume = 0;

        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "inline";
    }
});
vol2.addEventListener('click', e => {// Vol2 Button
    lastVol = currentSong.volume;
    console.log(lastVol);

    if(currentSong.volume >= 0.01){
        currentSong.volume = 0;
        
        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "inline";
    }
});
vol3.addEventListener('click', e => {// Vol3 Button
    lastVol = currentSong.volume;
    console.log(lastVol);
    if(currentSong.volume >= 0.01){
        currentSong.volume = 0;

        vol1.style.display = "none";
        vol2.style.display = "none";
        vol3.style.display = "none";
        vol0.style.display = "inline";
    }
})
vol0.addEventListener('click', e => {// Mute Button
    console.log(lastVol);
    if(currentSong.volume <= 0.01){
        currentSong.volume = lastVol;
        changeVolume(); //Set the right icon
    }
});

