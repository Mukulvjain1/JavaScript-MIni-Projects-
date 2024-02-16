function randomColor(){
    let hex= '0123456789ABCDEF';
    let color='#';
    for (let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interval
const start=function (){
    if (!interval){
     interval=setInterval(changeColor,1000);}
    function changeColor(){
        document.body.style.backgroundColor=randomColor();
        document.body.style.color="white";
        
    }
}
const stop =function (){
    clearInterval(interval);
    interval=null;
}
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);