// function clearScreen(){
//     // var a = document.getElementById("result").value;
//     // var b = a.clear();
//     document.getElementById("result").value = "";
// }

// function display(value){
//     document.getElementById("result").value += value;
// }

// function calculate(){
//     var a = document.getElementById("result").value;
//     var b = eval(a);
//     document.getElementById("result").value = b;
// }
  
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function backspace() {
    var currentInput = document.getElementById("result").value;
    document.getElementById("result").value = currentInput.slice(0, -1);
}

function calculate() {
    var input = document.getElementById("result").value;

    // Replace custom symbols with JavaScript-friendly symbols
    input = input.replace(/&#94;/g, '**'); // Replace x^ with **
    input = input.replace(/&#8730;/g, 'Math.sqrt'); // Replace √ with Math.sqrt
    input = input.replace(/log/g, 'Math.log10'); // Replace log with Math.log10
    input = input.replace(/ln/g, 'Math.log'); // Replace ln with Math.log

    // Handle factorial
    input = input.replace(/(\d+)!/g, function(match, number) {
        return factorial(parseInt(number));
    });

    try {
        const result = math.evaluate(input);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = error.message;
    }
}

function factorial(num) {
    // Ensure non-negative input
    if (num < 0) {
        throw new Error("input positive num");
    }

    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }
  
  document.querySelector('.theme-toggle').addEventListener('click', setTheme)
 