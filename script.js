let num1 = 0;
let num2 = 0;
let num3 = 0;
let opr = "";
let calc = false;
let clear = false;
let enable = true;

//queries
let nums = document.querySelectorAll('.row button');
let btns = document.querySelectorAll('.btn');

let win = document.querySelector(".window");
let ac = document.querySelector('.ac');
let neg = document.querySelector('.neg');
let back = document.querySelector('.back');
let eq = document.querySelector('.equals');

//clear display
ac.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    calc = false;
    clear = false;
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

// backspace button
back.addEventListener('click', () => {
    if (enable)
        win.textContent = win.textContent.slice(0,win.textContent.length-1);
})

// math buttons
btns.forEach((e) => {
    e.addEventListener('click', mathBtn);
});

// equals button
eq.addEventListener('click', () => {
    clear = true;
    if (calc) {
        num2 = win.textContent;
        num3 = mathLogic(opr);
        win.textContent = num3;
        calc = false;
    }
})

//updates display when button pressed
nums.forEach((e) => {
    if (!isNaN(e.textContent)) {
        e.addEventListener('click', addWindow);
    } 
    if (e.textContent == ".") {
        e.addEventListener('click', () => {
            if (!win.textContent.includes('.'))
            win.textContent += e.textContent;
        })
    }
});

function addWindow() {
    if (clear) {
        win.textContent = "";
        clear = false;
        enable = true;
    }
    win.textContent += this.textContent;
}

function mathBtn() {
    clear = true;
    enable = false;
    if (calc) {
        num2 = win.textContent;
        num3 = mathLogic(opr);
        win.textContent = num3;
        num1 = num3;
    } else {
        num1 = win.textContent;
        calc = true;
    }
    opr = this.textContent;
}

function mathLogic(symbol) {
    let result = 0;
    switch (symbol) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            result = parseInt(num1) / parseInt(num2);   
            break;
    }
    return result;
}

