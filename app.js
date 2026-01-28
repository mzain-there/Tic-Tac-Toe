let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let show=document.querySelector(".msg-container");
let newbtn=document.querySelector(".start");

let turnO=true;
const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("clicked");
    
   
         if(turnO){
            box.innerText="X";
            turnO=false;
         }
         else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
});
const resetgame=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
    show.innerText=" ";
}

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
   show.innerText= `Congratulations! The winner is ${winner}`;
   disablebtn();

}
const checkwinner=()=>{
    for(let pattern of wins){

        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=""  && p2!="" && p3!=""){
        if(p1===p2 && p2===p3){
            console.log("winner")
            console.log("winner", p1);
            showwinner(p1);
        }
    }
    }
}

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);