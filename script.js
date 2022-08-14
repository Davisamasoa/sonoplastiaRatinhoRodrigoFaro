let btn1 = document.querySelector(".um");
let btn2 = document.querySelector(".dois")
let btn3 = document.querySelector(".tres")
let btn4 = document.querySelector(".quatro")
let btn5 = document.querySelector(".cinco")
let btn6 = document.querySelector(".seis")
let btn7 = document.querySelector(".sete")
let btn8 = document.querySelector(".oito")
let btn9 = document.querySelector(".nove")
let audio = document.querySelector("audio");

btn1.addEventListener("click", ()=>{
    pausePLay("./sounds/rapaz.mp3");  
});

btn2.addEventListener("click", ()=>{
    pausePLay("./sounds/uepa.mp3");
});

btn3.addEventListener("click", ()=>{
    pausePLay("./sounds/pare.mp3"); 
});

btn4.addEventListener("click", ()=>{
    pausePLay("./sounds/cavalo.mp3");  
});

btn5.addEventListener("click", ()=>{
    pausePLay("./sounds/ui.m4a");   
});

btn6.addEventListener("click", ()=>{
    pausePLay("./sounds/eleGosta.mp3");  
});

btn7.addEventListener("click", ()=>{
    pausePLay("./sounds/que isso meu filho calma.mp3");   
});

btn8.addEventListener("click", ()=>{
    pausePLay("./sounds/tome.mp3");   
});

btn9.addEventListener("click", ()=>{
    pausePLay("./sounds/dançaGatinho.mp3");
});

function pausePLay(archiveWay){
    audio.src = archiveWay;
    audio.pause();
    audio.play();
}