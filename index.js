let randomNumber1=Math.ceil(Math.random()*6);
let randomNumber2=Math.ceil(Math.random()*6);

let randomImg1="images/dice"+randomNumber1+".png";
let randomImg2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);





// if(randomNumber1===1){
//     document.getElementById("img1").setAttribute("src", "/images/dice1.png");
// }

// if(randomNumber1===2){
//     document.getElementById("img1").setAttribute("src", "/images/dice2.png");
// }

// if(randomNumber1===3){
//     document.getElementById("img1").setAttribute("src", "/images/dice3.png");
// }

// if(randomNumber1===4){
//     document.getElementById("img1").setAttribute("src", "/images/dice4.png");
// }

// if(randomNumber1===5){
//     document.getElementById("img1").setAttribute("src", "/images/dice5.png");
// }

// if(randomNumber1===6){
//     document.getElementById("img1").setAttribute("src", "/images/dice6.png");
// }

// if(randomNumber2===1){
//     document.getElementById("img2").setAttribute("src", "/images/dice1.png");
// }

// if(randomNumber2===2){
//     document.getElementById("img2").setAttribute("src", "/images/dice2.png");
// }

// if(randomNumber2===3){
//     document.getElementById("img2").setAttribute("src", "/images/dice3.png");
// }

// if(randomNumber2===4){
//     document.getElementById("img2").setAttribute("src", "/images/dice4.png");
// }

// if(randomNumber2===5){
//     document.getElementById("img2").setAttribute("src", "/images/dice5.png");
// }

// if(randomNumber2===6){
//     document.getElementById("img2").setAttribute("src", "/images/dice6.png");
// }

if(randomNumber1>randomNumber2){
    document.getElementById("text").innerText="player 1 wins";}

    if(randomNumber2>randomNumber1){
        document.getElementById("text").innerText="player 2 wins";}

        if(randomNumber2===randomNumber1){
            document.getElementById("text").innerText="Draw!";}