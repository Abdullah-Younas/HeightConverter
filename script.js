const Userheightinput = document.getElementById("heightinput");
const MTOFCB = document.getElementById("mtof");
const FTOMCB = document.getElementById("ftom");
const submitButton = document.getElementById("submitbtn");
const UserHeightOutput = document.getElementById("outputheight");
let heightoutput;

MTOFCB.onclick = function(){
    FTOMCB.checked = false;
}
FTOMCB.onclick = function(){
    MTOFCB.checked = false;
}

submitButton.onclick = function(){
    if(MTOFCB.checked){
        heightoutput = Number(Userheightinput.value);
        heightoutput = heightoutput * 3.281;
        UserHeightOutput.textContent = heightoutput.toFixed(2) + "ft";
    }
    else if(FTOMCB.checked){
        heightoutput = Number(Userheightinput.value);
        heightoutput = heightoutput / 3.281;
        UserHeightOutput.textContent = heightoutput.toFixed(2) + "meters";
    }
    else{
        UserHeightOutput.textContent = "Select a Unit";
    }
}