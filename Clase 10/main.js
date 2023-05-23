let boton = document.getElementById("boton");

const respuesta = () => {
    console.log("click")
   };

//EVENTOS//
/* FORMA UNO */
/* boton.addEventListener("click", respuesta) */

/* FORMA 2 (MENOS UTILIZADA)*/
/* boton.onclick = respuesta; */

/* let evento = prompt("Ingrese el nombre del evento");
boton.addEventListener(evento, respuesta); */




/* EVENTOS MOUSE */

/* boton.addEventListener("mousedown", () => console.log("mousedown")); */
/* boton.addEventListener("mouseup", () => console.log("mouseup")); */
/* boton.addEventListener("mouseover", () => console.log("mouseover")); */
/* boton.addEventListener("mouseout", () => console.log("mouseout")); */
/* boton.addEventListener("mousemove", () => console.log("mousemove")); */
/* boton.addEventListener("click", () => console.log("click")); */

/*  boton.addEventListener("mousedown", () => console.log("mousedown"));
 boton.addEventListener("mouseup", () => console.log("mouseup"));
 boton.addEventListener("click", () => console.log("click")); */

/* 

/* EVENTOS MOUSE */
/* 
 let saludo = document.getElementById("saludo");

 boton.addEventListener("mousedown", () => {
   saludo.className = "verde";
 });

 boton.addEventListener("mouseover", () => {
   saludo.className = "rojo";
 });

 boton.addEventListener("mouseout", () => {
 saludo.className = "amarillo";
 });

 boton.addEventListener("click", () => {
   saludo.className = "azul";
 }) */ 

 
 
 //EVENTOS TECLADO
let nombre = document.getElementById("nombre");
 let saludo = document.getElementById("saludo"); 
/* nombre.addEventListener("keydown", () => console.log("keydown")); */

/* nombre.addEventListener("keyup", (e) => {
    if (e.key === "a") {
        saludo.className = "verde";
       } else if (e.key === "s") {
        saludo.className = "rojo";
     } else if (e.key === "d") {
       saludo.className = "amarillo";
       } else {
       saludo.className = "azul";
    }
   }); */
/* 
  nombre.addEventListener("input", () => {
  if(!nombre.value.includes("@")){
    saludo.className = "rojo";
  }else{
    saludo.className = "amarillo";
  }
 }); */

 let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  
  //preventdefault es para que el formulario no se recargue//
    e.preventDefault();
  /* console.log("hola"); */
  
   let inputs = e.target.children; 
  /*  console.log(inputs [0].value);
   console.log(inputs[1].value);  */

   if(!inputs[0].value.includes("@")){
    inputs[0].value = ""; 
   }
});