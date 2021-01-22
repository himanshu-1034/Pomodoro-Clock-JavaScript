// to change its bordercolor session/break
let countDownDiv = document.getElementById("countDownDiv");
// to show countdown
let countDownTimer = document.getElementById("countDownTimer");
// to show session1,2,3,4...... break!;
let sessionBreakHead = document.getElementById("sessionBreakHead");
//session time
let sessionTime = document.getElementById("sessionTime");
// break time
let breakTime = document.getElementById("breakTime");
// plus and minus buttons
let sessionMinus = document.getElementById("sessionMinus");
let sessionPlus = document.getElementById("sessionPlus");
let breakMinus  =document.getElementById("breakMinus");
let breakPlus = document.getElementById("breakPlus");
// start pause button
let startPauseButton = document.getElementById("startPauseButton");
// reset button
let resetButton = document.getElementById("resetButton");

// preRequisites for timer ...
var status = "paused";
var sessionMinutes;
var sessionSeconds;
var breakMinutes;
var breakSeconds;

var seconds,minutes;
var interval;
var cycle=1;



function addSession(){
    sessionTime.innerText++;
}
function subtractSession(){
    if(sessionTime.innerText>0){
        sessionTime.innerText--;
    }else{
        sessionTime.innerText = 0;
    }
}
function addBreak(){
    breakTime.innerText++;
}
function subtractBreak(){
    if(breakTime.innerText>0){
        breakTime.innerText--;
    }else{
        breakTime.innerText = 0;
    }
}

var count=0;


function StartPauseFunction(){
    if(count===0){
        sessionMinutes = sessionTime.innerText;
    sessionSeconds = 0;
    breakMinutes = breakTime.innerText;
    breakSeconds = 0;
    }
    var StringsessionMinutes;
    var StringsessionSeconds;
    var StringBreakMin;
    var StringBreakSec;
    sessionMinus.disabled = true;
    sessionPlus.disabled = true;
    breakPlus.disabled = true;
    breakMinus.disabled = true;
    

    if(status==='paused'){

        // start the watch.
        count=1;
        interval = window.setInterval(function(){
            
            if(sessionSeconds !=0){
                sessionSeconds--;
                countDownDiv.style.border = "10px solid cyan";
                sessionBreakHead.innerHTML = "Session "+cycle+"!";
                countDownTimer.style.color = "cyan";
                if(sessionSeconds<10){
                    StringsessionSeconds = "0"+sessionSeconds;
                }else{
                    StringsessionSeconds = sessionSeconds;
                }

                if(sessionMinutes<10){
                    StringsessionMinutes="0"+sessionMinutes;
                }else{
                    StringsessionMinutes = sessionMinutes;
                }

                countDownTimer.innerHTML = StringsessionMinutes + ":" + StringsessionSeconds;

            }else if(sessionMinutes !=0 && sessionSeconds===0){
                sessionSeconds = 59;
                sessionMinutes--;
                countDownDiv.style.border = "10px solid cyan";
                sessionBreakHead.innerHTML = "Session "+cycle+"!";
                countDownTimer.style.color = "cyan";

                if(sessionSeconds<10){
                    StringsessionSeconds = "0"+sessionSeconds;
                }else{
                    StringsessionSeconds = sessionSeconds;
                }

                if(sessionMinutes<10){
                    StringsessionMinutes="0"+sessionMinutes;
                }else{
                    StringsessionMinutes = sessionMinutes;
                }

                countDownTimer.innerHTML = StringsessionMinutes + ":" + StringsessionSeconds;



            }

            if(sessionMinutes ===0 && sessionSeconds===0){

                if(breakSeconds !=0){
                    breakSeconds--;
                    countDownDiv.style.border = "10px solid #fc6d05";
                    sessionBreakHead.innerHTML = "Break !";
                    countDownTimer.style.color = "#fc6d05";

                    if(breakSeconds<10){
                        StringBreakSec = "0"+breakSeconds;
                    }else{
                        StringBreakSec = breakSeconds;
                    }
    
                    if(breakMinutes<10){
                        StringBreakMin="0"+breakMinutes;
                    }else{
                        StringBreakMin = breakMinutes;
                    }
    
                    countDownTimer.innerHTML = StringBreakMin + ":" + StringBreakSec;


                }else if(breakMinutes !=0 && breakSeconds===0){
                    breakSeconds = 59;
                    breakMinutes--;
                    countDownDiv.style.border = "10px solid #fc6d05";
                    sessionBreakHead.innerHTML = "Break !";
                    countDownTimer.style.color = "#fc6d05";

                    if(breakSeconds<10){
                        StringBreakSec = "0"+breakSeconds;
                    }else{
                        StringBreakSec = breakSeconds;
                    }
    
                    if(breakMinutes<10){
                        StringBreakMin="0"+breakMinutes;
                    }else{
                        StringBreakMin = breakMinutes;
                    }
    
                    countDownTimer.innerHTML = StringBreakMin + ":" + StringBreakSec;


                }
            }


            if(sessionSeconds===0 && sessionMinutes===0 && breakMinutes===0 && breakSeconds===0){
                sessionMinutes = sessionTime.innerHTML;
                sessionSeconds = 0;
                breakMinutes = breakTime.innerHTML;
                breakSeconds = 0;
                cycle++;
            }
           



        },1000);
        startPauseButton.innerHTML = "Pause";
        status='started';
    }else if(status==='started'){
        // pause the watch.

        window.clearInterval(interval);
        startPauseButton.innerHTML = "Start";
        status = 'paused';
    }


}
function resetFunction(){
    window.clearInterval(interval);
    sessionMinus.disabled = false;
    sessionPlus.disabled = false;
    breakPlus.disabled = false;
    breakMinus.disabled = false;
    cycle = 1;
    count=0;
    sessionTime.innerHTML = 0;
    breakTime.innerHTML = 0;
    countDownTimer.innerHTML="00:00";
    sessionBreakHead.innerHTML = "Press Start";
    status="paused";
    startPauseButton.innerHTML = "Start";
}







startPauseButton.addEventListener('click',StartPauseFunction);
resetButton.addEventListener('click',resetFunction);
sessionPlus.addEventListener('click',addSession);
sessionMinus.addEventListener('click',subtractSession);
breakPlus.addEventListener('click',addBreak);
breakMinus.addEventListener('click',subtractBreak);

 
