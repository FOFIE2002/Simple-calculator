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
// function backspace(){
//     let display = document.getElementById('display');
//     display.value = display.value.slice(0, -1);
// }

// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
//   function appendFunction(func) {
//     document.getElementById('display').value += func;
//   }
  
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var input = document.getElementById("result").value;

    // Replace custom symbols with JavaScript-friendly symbols
    input = input.replace(/&#94;/g, '**'); // Replace x^ with **
    input = input.replace(/&#8730;/g, 'Math.sqrt'); // Replace √ with Math.sqrt
    input = input.replace(/log/g, 'Math.log10'); // Replace log with Math.log10
    input = input.replace(/ln/g, 'Math.log'); // Replace ln with Math.log

    // Handle factorial
    input = input.replace(/!/g, 'factorial');

    try {
        // Evaluate the expression after handling custom operations
        var result = eval(input);

        // If the result is a function, execute it using the Function constructor
        if (typeof result === 'function') {
            document.getElementById("result").value = new Function('return ' + result)();
        } else {
            document.getElementById("result").value = result;
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function backspace() {
    var currentInput = document.getElementById("result").value;
    document.getElementById("result").value = currentInput.slice(0, -1);
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}