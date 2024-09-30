const h1Text = "Hi I'm Anthony, a Full Stack Developer/Student."; // h1 text
const pText = "I am a Computer Science student at Northeastern Illinois University, passionate about becoming a Software Engineer. I am working towards becoming a Full Stack Engineer, with plans to develop my own app in the future."; // paragraph under
let h1Index = 0;
let pIndex = 0;
const typingSpeed = 50; // typing speed 
const delay = 500; // delay in milliseconds before starting the <p> animation

function typeWriterH1() {
    // Check if there are still characters to type in h1Text
    if (h1Index < h1Text.length) {
        document.querySelector("h1").innerHTML += h1Text.charAt(h1Index); // append += will add to whatever text is already in the HTML
        h1Index++; // move to the next character
        setTimeout(typeWriterH1, typingSpeed); // typing speed
    } 
    else {
        setTimeout(typeWriterP, delay); // starts typing <p> after a delay
    }
}

function typeWriterP() {
    // Check if there are still characters to type in pText
    if (pIndex < pText.length) {
        document.querySelector("p").innerHTML += pText.charAt(pIndex); // append each character to <p>
        pIndex++; // move to the next character
        setTimeout(typeWriterP, typingSpeed); // typing speed for <p>
    }
}

// Start the typing animation for <h1> when the page is loaded
window.onload = typeWriterH1;