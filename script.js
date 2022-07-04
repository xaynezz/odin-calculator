let num1 = 0;
let num2 = 0;
let num3 = 0;
let opr = "";
let calc = false;
let clear = true;
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
    clear = true;
    enable = true;
    win.textContent= "0";
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
            if (!win.textContent.includes('.') && win.textContent.length < 9)
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
    if (win.textContent.length < 9) win.textContent += this.textContent;
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
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);   
            break;
    }

    if (result - Math.floor(result) !== 0) 
        result = (Math.round(result * 100) / 100).toFixed(2);

    if (result > 999999999 || result < -999999999)
        result = "TOO BIG";

    return result;
}

