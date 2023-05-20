//getElementById
/*  let div = document.getElementById("aplicacion");
 console.log(div.innerHTML);
 console.log(div.innerText); */

/*  let parrafo = document.getElementById("parrafo");
 console.log(parrafo.innerHTML);
 console.log(parrafo.innerText); */

 /* let divs = document.getElementsByTagName("div");
 console.log(divs[0].innerHTML);
 console.log(divs[1].innerHTML);
 console.log(divs[2].innerHTML); */

/* let saludo = document.getElementById("saludo");
let seccion = prompt("Ingrese la seccion");

if (seccion === "carrito") {
   saludo.innerHTML = "<h1>Bienvenidos al carrito</h1>";
   saludo.className = "rojo";
 } else if (seccion === "favoritos") {
  saludo.innerHTML = "<h1>Bienvenidos a favoritos</h1>";
   saludo.className = "azul";
 } else {
    saludo.innerHTML = "<h1>Bienvenidos a nuestra super página</h1>";
   saludo.className = "verde";
 } */

 /* CREACION DE NODOS */
 
 /* let parrafo = document.createElement("p"); //creacion de la etiqueta
 parrafo.innerHTML = "<h1>Hola a todos</h1>"; //asignacion de contenido
 document.body.append(parrafo); */ //Esto es EN DONDE LO QUE QUEREMOS AGREGAR

 
// personas.forEach(item => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   contenedor.append(li);
// });

 const productos = [
   { id: 1, nombre: "camisa", precio: 1000 },
   { id: 2, nombre: "zapato", precio: 1000 },
   { id: 3, nombre: "gorra", precio: 1000 },
   { id: 4, nombre: "media", precio: 1000 },
   { id: 5, nombre: "jean", precio: 1000 },
 ];
 let contenedor = document.getElementById("contenedor");

 productos.forEach((item) => {
   let div = document.createElement("div");
   div.innerHTML = `
     <h2>Id: ${item.id}</h2>
     <p>Nombre: ${item.nombre}</p>
     <b>$${item.precio}</b>
     <hr />`;
     
     contenedor.append(div);
 });