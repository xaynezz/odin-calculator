let num1 = 0;
let num2 = 0;

//queries
let nums = document.querySelectorAll(".row button");
let win = document.querySelector(".window");
let ac = document.querySelector('.ac');
let neg = document.querySelector('.neg');
let back = document.querySelector('.back');

// arithmetic functions
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//clear display
ac.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    win.textContent= "";
})

// negative button
neg.addEventListener('click', () => {
    if (win.textContent.slice(0,1) == '-') {
        win.textContent = win.textContent.slice(1,win.textContent.length);
    }
    else {
        win.textContent = "-" + win.textContent;
    }
});

//backspace button
back.addEventListener('click', () => {
    win.textContent = win.textContent.slice(0,win.textContent.length-1);
})


//updates display when button pressed
nums.forEach((e) => {
    if (!isNaN(e.textContent) || e.textContent == ".") {
        e.addEventListener('click', addWindow);
    } 
});

function addWindow() {
    win.textContent += this.textContent;
}



