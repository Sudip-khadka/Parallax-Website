let fronts = document.querySelectorAll('.front');
let backs = document.querySelectorAll('.back');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill4 = document.getElementById('hill4');
let hill3 = document.getElementById('hill3');
let hill5 = document.getElementById('hill5');


window.addEventListener('scroll',()=>{
    let value=window.scrollY;

    fronts.forEach(front => {
        front.style.marginTop = value * 2.5 + "px";
    });

    backs.forEach(back => {
        back.style.marginTop = value * 2.5 + "px";
    });

    hill1.style.marginTop = value * 2.5 + "px";
    
    hill3.style.left = value * 0.5 + "px";
    hill3.style.top = value * 0.5 + "px";
    
    hill2.style.left = value * -1.5 + "px";
    hill2.style.top = value * 0.5 + "px";

    hill5.style.left = value * 0.5 + "px";
    
    
    hill4.style.left = value * -0.5 + "px";
    hill4.style.top = value * 0.5 + "px";

    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
})


//animating paragraph
let welcomeText = "Welcome to the paradise of";
// const welcomeArr = welcomeText.split("");

// let current = 0;

const frontElement = document.querySelector('.front.header');
const backElement = document.querySelector('.back.header');
    frontElement.innerText=welcomeText;
    backElement.innerText=welcomeText;

// const interval = setInterval(() => {
//     let newWord = '';
//     for (let i = 0; i <= current; i++) {
//         newWord += welcomeArr[i];
//     }

//     // Output the new word
//     frontElement.innerText = newWord;
//     backElement.innerText = newWord;

//     // Increment the index to move to the next step
//     current++;

//     // If we have reached the end of the string
//     if (current === welcomeText.length) {
//         // Clear the interval
//         clearInterval(interval);
//     }
// }, 100); // Adjust the interval time as needed


//animating header
let animate = "Sudip";
let animate2 = "The Web Developer";
let currentText = animate;
const arr = animate.split("");
const arr2 = animate2.split("");
const type = "|";
let currentIndex = 0;

const frontText = document.getElementById('frontText');
const backText = document.getElementById('backText');

frontText.innerText = type;
backText.innerText = type;

const intervalId = setInterval(() => {
    let newWord = '';
    const currentArr = currentText === animate ? arr : arr2;
    for (let i = 0; i <= currentIndex; i++) {
        newWord += currentArr[i];
    }
    // Output the new word
    frontText.innerText =newWord + type;
    backText.innerText =newWord + type;

    // Increment the index to move to the next step
    currentIndex++;

    // If we have reached the end of the string
    if (currentIndex === currentText.length) {
        // If the current text is the first string, switch to the second string
        if (currentText === animate) {
            currentIndex = 0;
            currentText = animate2;
        } else {
            // Clear the interval if the animation of the second string is complete
            clearInterval(intervalId);
            frontText.innerText=newWord;
            backText.innerText=newWord;
        }
    }
}, 500);



