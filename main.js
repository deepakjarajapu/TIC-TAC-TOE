let boxes=document.querySelectorAll(".box");
let winmsg=document.querySelector(".head");
let msgcontain=document.querySelector(".winmsgcontain");
let gamecontain=document.querySelector(".gamecontain");
let newgame=document.querySelector(".newgamebtn");
let resetgame=document.querySelector(".resetgamebtn");
let turnX =true;
let count=0;
let winpos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnX){
            box.innerText="X";
            box.classList.add("X")
            turnX=false;
        }else{
            box.innerText="O";
            box.classList.add("O")
            turnX=true;
        }
        box.disabled=true;
        showWinner();
        count++
        console.log(count)  

    })
})

let showWinner = () =>{
    for (let win of winpos){
        let pos1val=boxes[win[0]].innerText;
        let pos2val=boxes[win[1]].innerText;
        let pos3val=boxes[win[2]].innerText;
        if (count === 8){
            drawmsg();
        }
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                winnerMsg(pos1val);
            }
        }
   
    }
}

let drawmsg = () =>{
    winmsg.innerText = `DRAW`;
    msgcontain.classList.remove("hide");    
}

let winnerMsg = (val) =>{
    disableBoxes();
    winmsg.innerText = `Congratulations to PLAYER ${val} \nYou're WINNER`;
    msgcontain.classList.remove("hide")
    gamecontain.classList.add("hide")
}

let disableBoxes = () =>{
    boxes.forEach(box =>{
        box.disabled = true;
    })
}

let enableBoxes = () =>{
    boxes.forEach(box => {
        box.disabled = false;
    })
}

newgame.addEventListener(("click"),()=>{
    boxes.forEach(box=>{
        enableBoxes();
        box.innerText=""
        count = 0;
        msgcontain.classList.add("hide")
        gamecontain.classList.remove("hide")
        
    })
})

resetgame.addEventListener(("click"),()=>{
    boxes.forEach(box=>{
        enableBoxes();
        box.innerText=""
        count = 0;
        
    })
})

