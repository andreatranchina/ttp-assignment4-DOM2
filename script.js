/***********part1 ***********/

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let div1 = document.querySelector(".part1");
let textToAdd = document.createElement("p");
textToAdd.style.fontSize = "2rem";
textToAdd.style.fontWeight = "900";

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




/************** part3 and 4 **************/


let formButton = document.querySelector(".btn-form");
let formH1 = document.querySelector(".form-h1");
document.getElementById("my-form").addEventListener("click", (e) => {
    e.preventDefault();
})

formButton.addEventListener("click", () => {
    const password = document.getElementById("password").value;
    console.log(password);
    if (password != 12345678){ //because input from the form will be a string
        alert("Incorrect Password - Please try again!");
        formH1.innerText = "Please login - correct password 12345678";
    } else {
        formH1.innerText = "Login Successful";
    }
})






/************bonus***************/
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * (radius ** 3);
  }

  document.getElementById('resultbtn').addEventListener('click', () => {
    const radius = parseFloat(document.getElementById('input-radius').value);
    const volume = sphereVolume(radius);
    document.getElementById('result-display').textContent = `The volume of the sphere is: ${volume.toFixed(2)}`;
  });