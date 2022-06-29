function startTime(){

    const today = new Date();

    let y = today.getFullYear();
    let mth = today.getMonth();
    let day = today.getDay();
    let date = today.getDate();
    mth = checkTime(mth);
    day = checkTime(day);


    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    const days = [ "Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
    const months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

    for(day_counter = 0; day_counter < 7;day_counter++){
        if(day == day_counter){
            day = days[day_counter];
        }
    }

    for(mth_counter = 0;mth_counter < 12; mth_counter++){
        if(mth == mth_counter){
            mth = months[mth_counter];
        }
    }

    document.getElementById('date').innerHTML = y + ". " + mth + " " + date + ". " + day;
    setTimeout(startTime, 1000);

    document.getElementById('time').innerHTML = hr + ":" + min + ":" + sec;
    setTimeout(startTime, 1000);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}
