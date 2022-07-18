function convert(confrom,conto){
confrom *= document.getElementById("amnt").value;
document.getElementById("ans").innerHTML = "Converted Amount: " + confrom / conto;
}