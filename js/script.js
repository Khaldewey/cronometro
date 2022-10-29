var sec = 0;
var min = 0; 
var hra = 0;
var interval; 

function doisDigitos(digito){
    if(digito < 10){
        return('0'+digito);
    }else{
        return(digito);
    }
}

function start(){
    watch();
    interval = setInterval(watch,10);
} 

function pause(){
    clearInterval(interval);
} 


function stop(){
    sec = 0;
    min = 0; 
    clearInterval(interval);
    document.getElementById('watch').innerText='00:00:00';
} 

function watch(){
sec++;
if(sec==60){
    min++;
    sec=0;
    if(min == 60){
        hra++;
        min = 0;
    }
}
document.getElementById('watch').innerText=doisDigitos(hra)+':'+doisDigitos(min)+':'+doisDigitos(sec);
}