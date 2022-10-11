let outputDisply = document.getElementById("output");

function display(num) {
   outputDisply.value += num; 
}

function Calculate(){
    try {
        outputDisply.value = eval(outputDisply.value);
    } catch (error) {
        alert("invalid input")
    }
}
function clear(){
    outputDisply.value = "";
}
function del(){
    outputDisply.value = outputDisply.value.slice(0,-1);
    
}