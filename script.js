
function calculate(){
    let principal = document.getElementById("initial").value; //500
    let monthly = document.getElementById("monthly").value; //200 == "PMT"
    let length = document.getElementById("length").value; //10
    let rate = document.getElementById("rate").value; //8
    let frequency = document.getElementById("frequency").value; //annually --> 35,847.21

    let printAnswer = document.getElementById("answer")
    
    
    
    // if(frequency === "annually"){
            //     frequency.value = 1;
            // }
            // else if(frequency === "semiannually"){
                //     frequency.value = 2;
                // }
                // else if(frequency === "quarterly"){
                    //     frequency.value = 4;
                    // }
                    // else if(frequency === "monthly"){
                        //     frequency.value = 12;
                        // }
                        // else {
                            //     frequency.value = 365;
    // }
                        
    if(principal != "" && monthly != "" && length != "" && rate != ""){
        
        principal = principal.replace("/[^0-9.]/g", "");
        monthly = monthly.replace("/[^0-9.]/g", "");
        length = length.replace("/[^0-9.]/g", "");
        rate = rate.replace("/[^0-9.]/g", "");
        frequency = frequency.replace("/[^0-9.]/g", "");
    
    
        principal = parseFloat(principal);
        monthly = parseFloat(monthly);
        length = parseFloat(length);
        rate = parseFloat(rate);
        frequency = parseFloat(frequency);
        
        let main = principal * Math.pow(1+((rate/100)/frequency),frequency*length);

        let pmt = monthly * ((Math.pow((1+((rate/100)/frequency)),frequency*length)-1)/((rate/100)))*12;

        let result = main + pmt; 

        let final  = result.toFixed(2);

        //final.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        printAnswer.innerHTML = `In ${length} years, you will have $${final.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
    else {
        printAnswer.innerHTML = "Please fill all the blanks to calculate a result";
    }
}

function reset(){
    document.getElementById("initial").value = "";
    document.getElementById("monthly").value = "";
    document.getElementById("length").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("frequency").value = "";
    document.getElementById("answer").innerHTML = "";
}

