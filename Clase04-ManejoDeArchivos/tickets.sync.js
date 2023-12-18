// metodos syncronos
const fs = require("fs");
// rest of your code

// import nombreDelModulo from "ruta del modulo"

const ruta = "./Clase04-ManejoDeArchivos/data/ticket.json";
const datos = JSON.stringify(
  [{ title: "Harry Potter 1 " }, { title: "harry Potter 2" }],
  null,
  2
);
// para crear un archivo de forma sincrona
fs.writeFileSync(ruta, datos);

// para leer un archivo de fora sincrona
let configuracion = "utf-8";

const datosLeidos = fs.readFileSync(ruta, configuracion);
console.log(datosLeidos);
// pasamos los datos que obtenemos como JSON  a un array con el metodo json.parse() y lo transformas en un array de objetos
const datosParseados = JSON.parse(datosLeidos);
console.log(datosParseados);

// para verificar un archivo de forma sincrona
const existeAntes = fs.existsSync(ruta);
console.log(existeAntes);

// para eliinar un archivo de forma sincrona
fs.unlinkSync(ruta);

// para verificar si el archivo existe de forma sincrona
const existeDespues = fs.existsSync(ruta);
console.log(existeDespues);
