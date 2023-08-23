 //question 4
    function replace(){
    const content = document.getElementById('content');
    content.innerHTML = "Hello World";
 }

 //question 5
function replaceText(){
let content1 = document.getElementById('content1');
let button1 = document.getElementById('button1');
button1.addEventListener('click', ()=>{ 
    content1.innerText = "Welcome to Elevation Academy";
})}

//question 6
const Test6 = document.getElementsByClassName("Test6");
Test6[0].setAttribute("style", "color: red");
Test6[0].setAttribute("id", "heading");

//question 7
const FlexContainer = document.getElementById("Flex-Container");
const ChangeDirection = document.getElementById("ChangeDirection");
ChangeDirection.addEventListener('click', (e)=>{
    FlexContainer.classList.add("FlexColumn");
})

//question 9
let hourLabel = document.getElementById("hourLabel");
let minLabel = document.getElementById("minLabel");
let secLabel = document.getElementById("secLabel");
let AMPMLabel = document.getElementById("AMPM");
function Clock(){
    let newDate = new Date();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();
    let AMPM = "AM"
    if(newHour > 12){
        newHour -= 12;
        AMPM = "PM"
    }
     hourLabel.innerText = newHour;
    minLabel.innerText = newMin;
    secLabel.innerText = newSec;
    AMPMLabel.innerText = AMPM;
}
setInterval(Clock, 1000);