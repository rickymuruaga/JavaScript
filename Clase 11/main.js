//LOCAL STORAGE//

/* console.log(localStorage); */

//Metodo para almacenar informacion, tanto clave como valor deben ser strings//

/* localStorage.setItem("nombre", "ricky");
localStorage.setItem("numero", "5");
localStorage.setItem("valor", "true"); */

/* let nombre = localStorage.getItem("nombre")
console.log(nombre);

let numero = localStorage.getItem("numero")
console.log(numero);

let valor = localStorage.getItem("valor")
console.log(valor);
 */


//SESION STORAGE//
/* 
sessionStorage.setItem("nombre", "ricky");
sessionStorage.setItem("numero", "5");
sessionStorage.setItem("valor", "true"); */


//METODO PARA RECUPERAR CLAVES EN EL LOCAL STORAGE// 
/* for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    
    console.log("clave", clave);
    console.log("valor", localStorage.getItem(clave));
} */

//ELIMINAR EL STORAGE
// localStorage.removeItem("nombre"); // Elimina un elemento por su clave
// localStorage.clear(); // Elimina todo el storage

//METODO PARA CONVERTIR EL ELEMENTO EN FORMATO JSON//

/* let arreglo = [1,2,3,4];
let objeto = {
    nombre: "ricky",
    edad: 28,
};
 */
/* localStorage.setItem("arreglo", JSON.stringify(arreglo));
localStorage.setItem("objeto", JSON.stringify(objeto)); */

//METODO PARA DEVOLVER LOS ELEMENTOS TANTO OBJETO COMO ARREGLO A SU VALOR ORIGINAL//

/* let objeto = localStorage.getItem("objeto");
 console.log(JSON.parse(objeto));

let arreglo = localStorage.getItem("arreglo");
 console.log(JSON.parse(arreglo));
 */

/*  const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "zapato", precio: 1000 },
    { id: 3, nombre: "gorra", precio: 1000 },
    { id: 4, nombre: "media", precio: 1000 },
     ]; */
    //ARROW FUNCTION PARA GUARDAR EL ARRELO//
     /* const guardar = (clave, valor) => {
      localStorage.setItem(clave, valor);
     }
        
    productos.forEach(item => {
    guardar(item.id, JSON.stringify(item));
     }); */

    /*  localStorage.setItem("carrito", JSON.stringify(productos)); */

    //EJEMPLOS

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    alert(`Bienvenido ${usuario} nuevamente`)
} else{
    usuario = prompt("ingrese el usuario");
    alert(`Bienvenido ${usuario} eres nuevo`);
    localStorage.setItem("usuario",usuario);
}