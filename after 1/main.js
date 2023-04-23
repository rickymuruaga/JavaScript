let operacion = prompt("ingrese operacion")
let numero1 = parseInt(prompt("ingrese numero1"))
let numero2= parseInt(prompt("ingrese numero2"))
let resultado;
switch(operacion){
    case "suma":
    resultado=numero1+numero2;
    alert(resultado)
    break;
    case "resta":
    resultado=numero1-numero2
    alert(resultado)
    break;
    case "multiplicacion":
    resultado=numero1*numero2
    alert(resultado)
    break;
    default:
    alert("ingrese operacion valida")
}