var ouputDIV = document.getElementById("container-ouput-text");
var inputText = document.getElementById('text-input');
var button = document.getElementById('button-copy');
var outputimage = document.getElementById('ouput-imagen');
var textOuput = document.getElementById('text-ouput');
ouputDIV.style.display = "none";


function encrypt() {
    ouputDIV.style.display = "block";
    outputimage.style.display = "none";
    textOuput.value = inputText.value;
}
function decrypt() {
    ouputDIV.style.display = "block";
    outputimage.style.display = "none";
}
