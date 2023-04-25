// let nombre = "Ricky";
// let apellido = "Muruaga";
// let edad = 28; (POR QUE EL NUMERO EN VARIABLE EDAD VA SIN COMILLAS??????)

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

/*
   CONSTANTES: A LA VARIABLE SE LE ASIGNA UN NUMERO A CADA UNA

// const ciudad1 = "San Miguel de Tucuman";
// const ciudad2 = "Buenos Aires";
// const ciudad3 = "Madrid";
// const ciudad4 = "Coppenhagen";
// const ciudad5 = "Brujas";

// console.log(ciudad1);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);    

*/

// let nombre = "Ricky";
// let apellido = "Muruaga";
// let direccion = "Tucuman"
// let pais = "Argentina";

// console.log(``);

 
let nombre = prompt("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");
let edad = prompt("ingrese su edad");
let direccion= prompt ("ingrese su direccion");
let nacionalidad= prompt ("ingrese su nacionalidad")
let numeroCarnet = "B47U89RE243"

let carnet = 
`Carnet de conducir de: ${nombre} ${apellido}
edad: ${edad}
nacionalidad: ${nacionalidad}
direccion: ${direccion}
numero de carnet : ${numeroCarnet}`;

if(edad >= 18){
    console.log (carnet);
    alert(carnet);
}else{
    console.log(`carnet denegado`);
    alert(`carnet denegado`);
}