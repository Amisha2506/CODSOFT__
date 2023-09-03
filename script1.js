function clearScreen() {
    document.getElementById("output").value = "";
}
 
function display(value) {
    document.getElementById("output").value += value;
}
function calculate() {
    var a = document.getElementById("output").value;
    var b = eval(a);
    document.getElementById("output").value = b;
}