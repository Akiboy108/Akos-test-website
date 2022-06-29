warning = document.getElementById("warn");
darkBckg = document.getElementById("fullPage");
lockScreen = document.getElementById("content");


function warningFunction(){
    warning.style.display = "block";
    
    darkBckg.style.filter = "blur(5px)";
    document.body.style.overflow ="hidden";
}


function closeFunction(){
    warning.style.display = "none";
    
    darkBckg.style.filter = "none";
    document.body.style.overflow ="auto";
}

