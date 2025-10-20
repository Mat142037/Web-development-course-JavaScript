//Activity 2.1 Write your first JavaScript code
window.onload = function () {
    alert("Welcome to my JavaScript course")
}

//Activity 2.2 Change HTML content
function newFunction() {
    document.getElementById('demo').innerHTML = "The heading has changed!";
}

//Activity 2.3 Log information onto the console
var age = 20;
if (age >= 18) {
    console.log("adult");
} else {
    console.log("minor");
}

//Activity 2.4 Practice the syntax

//Array
const listCountry = ["Canada", "France", "UK", "Spain", "Austrailia"]; //List of countries
listCountry.push("Russia"); //Adding to the list
console.log(listCountry); //Log information onto the console

function listFunction() {
    let text =""; //Variable
    for (let i=0; i < listCountry.length; i++) //Loop
        text = text + listCountry[i] + "<br>";
    document.getElementById("list").innerHTML = text; //Sending data to HTML
}

//Switch
let nationality = "british";

switch (nationality) {
    case "american":
        console.log("you are american");
        break;
    
    case "german":
        console.log("you are german");
        break;
    
    case "french":
        console.log("you are french");
        break;
    
    case "british":
        console.log("you are british");
        break;
    
    case "chinese":
        console.log("you are chinese");
        break;
}





