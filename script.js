let boxes = document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true;
const winpatterns = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6] ,
 [1,4,7] ,
[2,5,8], 
[0,4,8] ,
[2,4,6] 





];



const resetgame = () =>{

    turnO = true ;
    enableBoxes();
    msgContainer.classList.add("hide");

};
  




boxes.forEach((box) =>{



    box.addEventListener("click" , () => {



        console.log("box was clicked");

        if(turnO){//player o

            box.innerText = "O";
            turnO = false;

        }else { //player x


            box.innerText = "X";
            turnO = true ;
        }
          box.disabled = true;



          checkwinner();
    }
);

}
);

const disableBoxes = () =>{

    for (let box of boxes){

        box.disabled = true ;
    }


};



const enableBoxes = () => {



    for (let box of boxes){

        box.disabled = false;
        box.innerText = "";
        

    }
};

const showWinner = (winner) => {

   msg.innerText = 'Congratulations , Winner is ${winner}; ' ;
   msgContainer.classList.remove("hide");       
  disableBoxes();
};



const checkwinner = () => {

 for(let pattern of winpatterns) {
 
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
   
       if(pos1val != "" &&  pos2val != "" && pos3val != ""){

                   if(pos1val === pos2val && pos2val === pos3val) {

                    console.log("winner",pos1val);

                    showWinner(pos1val);
                   }

       }
 }


} ;



newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


