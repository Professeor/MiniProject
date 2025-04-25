let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;
let count = 0;

let win = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];

const resetgame = () =>{
    turn0 = true;
    enablbox();
    msgcontainer.classList.add("hide"); 

}
const disablbox= ()=>{
    for(let box of boxes ){
        box.disabled = true;
    }

}
const enablbox= ()=>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";



    }


}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
         console.log("btn click");
        if(turn0){
            box.innerText = "O";
            
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }
       box.disabled  = true;
       count++;
        let Lwinner = checkwin();
        if(count == 9 && !Lwinner){
           drawgame();
        }
       
    });
});
const drawgame = () =>{
    msg.innerText = "Game is draw";
    msgcontainer.classList.remove("hide");
    disablbox();
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulation winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
    disablbox();

};
const checkwin = ()=>{
    for(pattern of win){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!="")
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            } 
    }
}
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);