let pintas = ["\u2660" , "\u2663" , "\u2665" , "\u2666"];
let valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let valorcarta = document.getElementById("valorcarta");
valorcarta.innerHTML = `<p> ${valores[Math.floor(Math.random()*13)]} </p>`;


switch(Math.floor(Math.random()*4)){
    
    case 0:
        document.getElementsByClassName("pinta")[0].setAttribute("simbolo" , pintas[0]);
        document.getElementsByClassName("pinta")[1].setAttribute("simbolo" , pintas[0]);
        break
    
    case 1:
        document.getElementsByClassName("pinta")[0].setAttribute("simbolo" , pintas[1]);
        document.getElementsByClassName("pinta")[1].setAttribute("simbolo" , pintas[1]);
        break
    
    case 2:
        document.getElementsByClassName("pinta")[0].setAttribute("simbolo" , pintas[2]);
        document.getElementsByClassName("pinta")[1].setAttribute("simbolo" , pintas[2]);
        document.getElementsByClassName("pinta")[0].style.color = "red";
        document.getElementsByClassName("valor")[0].style.color = "red";
        document.getElementsByClassName("pinta")[1].style.color = "red";
        break
    
    case 3:
        document.getElementsByClassName("pinta")[0].setAttribute("simbolo" , pintas[3]);
        document.getElementsByClassName("pinta")[1].setAttribute("simbolo" , pintas[3]);
        document.getElementsByClassName("pinta")[0].style.color = "red";
        document.getElementsByClassName("valor")[0].style.color = "red";
        document.getElementsByClassName("pinta")[1].style.color = "red";
        break
    
}