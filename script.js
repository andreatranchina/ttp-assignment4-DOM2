/***********part1 ***********/

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let div1 = document.querySelector(".part1");
let textToAdd = document.createElement("p");

btn1.addEventListener("click", function(){
    textToAdd.innerText = "I'm right!";
    div1.appendChild(textToAdd);
});

btn2.addEventListener("click", function(){
    textToAdd.innerText = "No, I'm right!";
    div1.appendChild(textToAdd);
});



/**************part2 ************/
// function myAlert(){
//     alert("Hey, I told you not to hover over me!");
//   }

let div = document.querySelector('.hover-element');

div.addEventListener('mouseover', () => {
    alert("Hey, I told you not to hover over me!");
});




/**************part3**************/