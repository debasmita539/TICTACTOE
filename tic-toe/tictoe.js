let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector("#msg");
let newbutton = document.querySelector("#new-button");
let turnO = true;
const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]


];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;

        }else{
            box.innerText="X";
            turnO=true;

        }box.disabled=true;
        checkWinner();
        
       
    });
});
const showWinner=(start)=>{
    msgcontainer.innerText=`congo..you won the game`
msgcontainer.classList.remove("hide");
};

const checkWinner=(start)=>{
    for(let pattern of winpatterns){
       
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val!=""&& pos2val !="" && pos3val!=""){
            if (pos1val===pos2val && pos2val ===pos3val)
            {
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
