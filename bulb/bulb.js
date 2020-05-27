const tubelight=()=>{
    for(x=1;x<6;x++){
        let bid=document.getElementById("light".concat(x));
        let text=document.getElementById("text");
        let audio=new Audio("switch-4.mp3");
        if(bid.src.match('bulbon')){
            bid.src='bulboff.jpg';
            text.innerHTML="Light is OFF";
            text.style.color="black";
            audio.play();
        }
        else{
            bid.src='bulbon.jpg';
            text.innerHTML="Light is ON";
            text.style.color="orange";
            audio.play();
        }
    }
}