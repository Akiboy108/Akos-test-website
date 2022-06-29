sliderButtons = document.querySelector('.carousel-btn');
numberOfImages = document.getElementsByClassName('carouselImg').length-1;
imgContainer = [];
imgIndex = [];
let imgCounter = numberOfImages;
let i = 0;
first = 0;
next = -1;
plus1 = 1;
plus2 = 2;
min1 = 1;
min2 = 2;

function checkActive(){
    for(i = 0; i < document.getElementsByClassName('carouselImg').length; i++){
        imgContainer[i] = document.getElementsByClassName('carouselImg')[i];
        imgIndex[i] = i; //console.log("imgindex: "+imgIndex[i]);
    }
}


prevBtn.addEventListener('click', e => {
    console.log('Button successfully pressed!');
});




function checkNextImg(){
    
    //console.clear();
    //console.log("BEFORE check: "+imgCounter);
    //console.log("BEFORE plus1: "+(plus1));
    //console.log("BEFORE plus2: "+(plus2));
    //console.log("BEFORE min1: "+(min1));
    //console.log("BEFORE min2: "+(min2));
    //console.log("--------------------");

    next += 1;
    plus1 += 1;         
    plus2 += 1;         
    min1 = imgCounter-1;
    min2 = imgCounter-2;
    checkNextCounter();
    imgContainer[imgCounter].classList.add('active', 'activeZindex');
    imgContainer[imgCounter].classList.remove('prev', 'nextZindex');
    imgContainer[min1].classList.remove('active', 'next-img-animation', 'activeZindex');
    imgContainer[min1].classList.add('prev');
    imgContainer[min2].classList.remove('prev', 'prev-img-animation');
    imgContainer[next].classList.add('nextZindex');
    console.log(next);
    checkNextCounter();
    imgCounter += 1;    
    checkNextCounter();


    //imgContainer[plus1].classList.add('nextZindex');
    //console.log("AFTER check: "+imgCounter);
    //console.log("AFTER plus1: "+(plus1));
    //console.log("AFTER plus2: "+(plus2));
    //console.log("AFTER min1: "+(min1));
    //console.log("AFTER min2: "+(min2));
    

nextImgAnim(); 
}
//_______________________C H E C K   N E X T   C O U N T E R______________________
function checkNextCounter(){
    if(imgCounter > document.getElementsByClassName('carouselImg').length-1){
        imgCounter = 0;
    }
    if(imgCounter < 0){
        imgCounter = document.getElementsByClassName('carouselImg').length-1;
    }
    if(min1 == -1){
        min1 = document.getElementsByClassName('carouselImg').length-1;
    }
    if(min1 == -2){
        min1 = document.getElementsByClassName('carouselImg').length-2;
    }
    if(min2 == -1){
        min2 = document.getElementsByClassName('carouselImg').length-1;
    }
    if(min2 == -2){
        min2 = document.getElementsByClassName('carouselImg').length-2;
    }
    if(min2 == -3){
        min2 = document.getElementsByClassName('carouselImg').length-3;
    }
    if(plus1 == 6){
        plus1 = 0;
    }
    if(plus1 == 7){
        plus1 = 1;
    }
    if(plus2 == 6){
        plus2 = 0;
    }
    if(plus2 == 7){
        plus2 = 1;
    }
    if(plus2 == 8){
        plus2 = 2;
    }
    if(min1 == 6){
        min1 = 0;
    }
    if(min1 == 7){
        min1 = 1;
    }
    if(min2 == 6){
        min2 = 0;
    }
    if(min2 == 7){
        min2 = 1;
    }
    if(next == 6){
        next = 0;
    }
    if(next == 7){
        next = 1;
    }
}
//_____________________________________________________________________________________
function nextImgAnim(){
    for(i = 0; i < document.getElementsByClassName('carouselImg').length; i++){
        if(imgContainer[i].classList.contains('active')){
            imgContainer[i].classList.add('next-img-animation');
        }
        if(imgContainer[i].classList.contains('prev')){
        }
    }
}
//_____________________________________________________________________________________

