let animate = "Sudip";
let animate2 = "Web Developer";
const arr = animate.split("");
const arr2 = animate2.split("");
let text = document.getElementById('text');
text.innerText = "";

const type = "|";
text.innerText = type;

let currentIndex1 = 0;
let currentIndex2 = 0;

const intervalId = setInterval(() => {
    let newWord = '';
    for (let i = 0; i <= currentIndex1; i++) {
        newWord += arr[i];
    }

    // Output the new word
    text.innerText = newWord + type;

    // Increment the index to move to the next step
    currentIndex1++;

    // If we have reached the end of the string, stop the interval
    if (currentIndex1 === animate.length) {
        clearInterval(intervalId);
        currentIndex1 = 0; // Reset currentIndex1 for next animation
        // Start animating the second string
        const intervalId2 = setInterval(() => {
            let newWord2 = '';
            for (let i = 0; i <= currentIndex2; i++) {
                newWord2 += arr2[i];
            }
            text.innerText = newWord2 + type;
            currentIndex2++;
            if (currentIndex2 === animate2.length) {
                clearInterval(intervalId2);
            }
        }, 500);
    }
}, 500);
