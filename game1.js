let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

// generate computer choice function to generate random value 

    const compchoice =() =>{
     const options = ["Rock","paper","scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
};

// Arrow function 
 const drawgame = () =>{
   console.log("game was draw");
   msg.innerText ="draw. play again";
 };


//  Arrow function 
const showwinner = (userwin) =>{
    if(userwin)
    {
         console.log("you win");
        msg.innerText ="you win";
        msg.style.backgroundColor ="green";
    }
     else{
         console.log("you lose");
        msg.innerText ="you lose";
        msg.Style.backgroundColor ="red";
    }
 };
// computer choice to play game 

    const playgame =(choiceid) =>{
    console.log("user choice =", choiceid);

//  generate computer choice 

    const compchoices = compchoice();  //variable 
    console.log(" comp choice =", compchoices);
 
    // ifelse condition 

    if(choiceid === compchoices){
     drawgame();
 }
    else {
       let userwin = true;
    if(choiceid === "Rock")
     {
        userwin =( compchoices === "paper") ? false: true;
    } 
   else if (choiceid === "paper") {
        userwin = (compchoice === "scissors")? false : true;
     }
   else{
      userwin =  compchoice ==="Rock " ? false : true;
    }

    // function call
    showwinner(userwin);
 }
 };


//eventlistener to track click function

    choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
    const choiceid = choice.getAttribute("id"); //choiceid= userchoice
    console.log("choice was clicked",choiceid);
    playgame(choiceid);
    });
});