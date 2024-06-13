const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

let userscore=0
let compscore=0

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randid=Math.floor(Math.random()*3);
    return options[randid];
};

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again.";
    msg.style.color= "whitsmoke";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.background="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`comp win! computer ${compchoice} beats ${userchoice}`;
        msg.style.background="red";
    }
};
const playGame=(userchoice)=>{
    const compchoice =gencompchoice()
     if(userchoice === compchoice){
        drawGame();
     }else{
        let userwin=true;
        if(userchoice === "rock"){
            //sc,pap
            userwin=compchoice === "paper" ?false:true;
        }
        else if(userchoice === "paper"){
            userwin= compchoice === "scissors"? false:true;
        }
        else{
            userwin= compchoice === "rock"? false:true;
        }
        showwinner(userwin,userchoice.compchoice);
     }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});

