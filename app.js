let gameseq=[];
let userseq=[];

btns=["red","yellow","green","blue"];

let started = false;
let level = 0;

let h3=document.querySelector("h3");


  document.addEventListener("keypress", function(){
    if(started==false){
     console.log("game started");
    started=true;

   levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)

}
function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000)

}

function levelup(){
    userseq=[];
    level++;
    h3.innerText= `level ${level}`;

    let randinx=Math.floor(Math.random()*4);
    let randcolor= btns[randinx];
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randinx);
    console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor)
    console.log(gameseq)
    btnflash(randbtn);
}

function checkseq(idx){
    // // console.log("curr level:",level);
    // let idx=level-1
    if( gameseq[idx] === userseq[idx] ){
        if(userseq.length === gameseq.length)
         setTimeout(levelup, 1000)
        // console.log("same color")
    }else{
        h3.innerText=`Game over!  your score is : ${level*2} Press any key to restart the game.`
    
        reset() 
    }

} 
function btnpress(){
let btn=this;
console.log(this);
userbtnflash(btn);

let usercolor = btn.getAttribute("id");
// console.log(usercolor);
userseq.push(usercolor); 

checkseq(userseq.length-1)

}
let allbtn = document.querySelectorAll(".btn");
for(let bt of allbtn){
    bt.addEventListener("click", btnpress)
}

function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;
}