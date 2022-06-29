let allSongs = [];
let TrackObject = [];
Container = document.getElementById("music-container");
var songForm = document.getElementById("addForm");
let newSong;
let checkBtn = document.querySelector('#checkBtn');
let uploadFeedback = document.querySelector('#ul');
audioOgg = "audio/ogg>";
source = "<source src=";
path = "music/feelgood.mp3 ";
type = "type=";

function getSongsData() {
    for (let i = 0; i < document.getElementsByTagName("audio").length; i++) {
        TrackObject[i] = document.getElementsByTagName("audio")[i];
    }
}

function addSongForm(){
    songForm.style.display = "block";
}function closeSongForm(){
    songForm.style.display = "none";
}

checkBtn.addEventListener('click', e => {
    closeSongForm();
    uploadFeedback.style.display = "block";
});
    
function closeFunction(){
    uploadForm.style.display = "none";
}

checkBtn.addEventListener('click', e => {

    newArtist = document.querySelector("input[name='eaInput']");
    newTitle = document.querySelector("input[name='titleInput']");
    newPath = document.getElementById("filePath");
    newSong = document.createElement("audio");

    newSong.title = newArtist.value + " - " + newTitle.value;
    newSong.type = "audio/ogg";
    newSong.innerHTML = source + path + type + audioOgg;
    newSong.classList.add("musics");

    newSong.id = document.getElementsByTagName("audio").length + 1;

    console.log(newSong.title);
    console.log(newSong.type);
    console.log(newSong.innerHTML);
    console.log(newSong.className);
    console.log(newSong.id);
    
    TrackObject.push(newSong);
    Container.appendChild(newSong);
    console.log(TrackObject, Container);
});
    