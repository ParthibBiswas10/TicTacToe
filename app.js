let boxes= document.querySelectorAll(".box");
let yay= new Audio("yay.mp3");
let ting = new Audio("ting.mp3");
let gameoveraudio= new Audio("gameover.mp3");
let info=document.querySelector('.info');
let winMsg = document.querySelector('.winMsg'); 
let restart = document.querySelector('.restart'); 
let dl = document.querySelector('bi bi-brightness-high-fill')
let flag=1;
let turnX=true;
let toggle = document.getElementById('toggleDark');
let body = document.querySelector('body');
let tb = document.querySelectorAll(".turnbox");
let button = document.querySelector(".btn-15");
const buttonText = button.querySelector('span');
isDM=false;

button.addEventListener('click', function(){
    
    if(isDM){
       
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        boxes.forEach(box => {
            if (!box.classList.contains('bt')) box.style.borderTop = '3px solid black';
            if (!box.classList.contains('br')) box.style.borderRight = '3px solid black';
            if (!box.classList.contains('bl')) box.style.borderLeft = '3px solid black';
            if (!box.classList.contains('bb')) box.style.borderBottom = '3px solid black';
        });
   
        tb.forEach(element => {
            element.style.border = '3px solid black';
        });
        buttonText.textContent='Dark  Mode';
        button.style.borderColor = 'black !important';
    }
    else{

        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        boxes.forEach(box => {
            if (!box.classList.contains('bt')) box.style.borderTop = '3px solid white';
            if (!box.classList.contains('br')) box.style.borderRight = '3px solid white';
            if (!box.classList.contains('bl')) box.style.borderLeft = '3px solid white';
            if (!box.classList.contains('bb')) box.style.borderBottom = '3px solid white';
        });
        tb.forEach(element => {
            element.style.border = '3px solid white';
        });
        button.style.borderColor = 'white !important';
        buttonText.textContent='Light  Mode';
    }
    isDM = !isDM;

});
boxes.forEach((box)=>{
box. addEventListener("click",function(){
    
   let turn="X";
   
    if(turnX){
        document.querySelector(".bg").style.left = "85px";
        box.innerText="X";
        turnX=false;
       
        ting.play();
    }
    
    else{
        document.querySelector(".bg").style.left = "0";
        box.innerText="O";
        turnX=trueturn="X";
        ting.play();
    }

   
    box.classList.add('disabled');
    checkwinner();
   
 
})
})
let checkwinner=()=>{
let winLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let winner = false;
winLogic.forEach(e=>{

    if((boxes[e[0]].innerText!=="")&& (boxes[e[0]].innerText===boxes[e[1]].innerText) && (boxes[e[1]].innerText===boxes[e[2]].innerText)) 
    {   document.querySelector('.wmtext').innerHTML=`${boxes[e[0]].innerText} Wins !!`;
        yay.play();
         winMsg.style.display="flex"; // Show winMsg
        winner = true;
      
    }
    
})
if (!winner) {
    let draw = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            draw = false;
        }
    });
    if (draw) {
        document.querySelector('.wmtext').innerHTML = `Draw!`;
        winMsg.style.display = "flex";
        
        gameOver = true;
    }
}

}


restart.addEventListener("click",()=>{

    boxes.forEach((box) => {
        
        box.innerText = ""; // Reset the text in each box
        box.classList.remove('disabled'); // Enable the boxes
    });
    winMsg.style.display = "none";
    turnX = true;
    document.querySelector(".bg").style.left = "0"
})
