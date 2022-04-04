
function calculate(){
    let initial = document.getElementById("initial").value;
    let monthly = document.getElementById("monthly").value;
    let length = document.getElementById("length").value;
    let rate = document.getElementById("rate").value;
    let frequency = document.getElementById("frequency").value;
    
    
    let exponent = frequency * length;
    let main = initial * (rate / monthly);
    let result = Math.pow(main, exponent);
    
    document.getElementById("answer") = `In ${length} years, you will have ${result}`
    console.log(result);
}

function reset(){
    document.getElementById("initial").value = "";
    document.getElementById("monthly").value = "";
    document.getElementById("length").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("frequency").value = ""
}