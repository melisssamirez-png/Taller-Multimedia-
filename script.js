console.log ("melissa");

const galleta2 = document.getElementById("galleta"); 
let estadoOriginal = true; 

galleta2.innerText = "chips ahoy";

galleta2.addEventListener ("click", () => {
    
if (estadoOriginal === true) {
    galleta2.innerText = "Oreo";
galleta2.style.color = "pink";
}

else {

     galleta2.innerText = "chips ahoy";
    galleta2.style.color= "brown";
}

 estadoOriginal = !estadoOriginal;
}); 

console.log (galleta2)


