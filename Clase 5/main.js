/* const persona ={
    nombre : "Ricky",
    edad : 28,
    ciudad : "Tucuman",           
};
                               DOS FORMAS DIFERENTES DE LLAMAR PARAMETROS
console.log(persona.nombre);
console.log(persona["nombre"]);
 */

/*  function Persona(nombre, edad, direccion){
  this.nombre = nombre;
   this.edad = edad;
   this.direccion = direccion;
 }

 let persona1 = new Persona("Ricky", 45, "AV");
 let persona2 = new Persona("Muruaga", 46, "AV1");
 console.log(persona1);
 console.log(persona2);

  */

 function persona(nombre,edad,ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
 }
 
 let persona1 = new persona("Ricky", 28, "Tucuman");
 let persona2 = new persona("andres", 25, "colombia");

 console.log(persona1);
 console.log(persona2);