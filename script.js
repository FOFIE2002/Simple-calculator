function clearScreen(){
    // var a = document.getElementById("result").value;
    // var b = a.clear();
    document.getElementById("result").value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}