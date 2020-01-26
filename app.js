function time([arg1,arg2]){
    let hour = parseInt(arg1);
    let minute = parseInt(arg2) + 15;
    let hours = 0;
    let hoursSum = hour + hours;

    if(minute > 59){
        hoursSum++;
        minute -= 60;
    }
    if(hoursSum > 23){
        hoursSum -= hoursSum;
    }
    if (minute < 10){
        console.log((hoursSum) + ":0" + minute);
    } 
    else{
        console.log((hoursSum) + ":" + minute);
    }

}

time([11,08]);
