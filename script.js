const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const display = document.getElementById('display');

let startTime = 0;
let elapsedTime = 0;
let hrs = 0;
let min = 0;
let sec = 0;
let paused = true;
let intervalid;

start.addEventListener("click", ()=>{
    if(paused){
        startTime = Date.now() - elapsedTime;
        paused = false;
        intervalid = setInterval(updateTime, 1000);
    }
})
stop.addEventListener("click", ()=>{
    if(!paused){
        elapsedTime = Date.now() - startTime;
        paused = true;
        clearInterval(intervalid);
    }
})
reset.addEventListener("click", ()=>{
    elapsedTime = 0;
    startTime = 0;
    paused = true;
    clearInterval(intervalid);
    display.innerHTML = '00:00:00' ;
})

function updateTime(){
    elapsedTime = Date.now() - startTime;
    sec = Math.floor((elapsedTime/1000)%60);
    min = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*3600))%60);
    sec = setFormat(sec);
    min = setFormat(min);
    hrs = setFormat(hrs);
    display.innerHTML = `${hrs}:${min}:${sec}`
}

function setFormat(x){
    return ("0"+x).length>2 ? x : "0"+x;
}
