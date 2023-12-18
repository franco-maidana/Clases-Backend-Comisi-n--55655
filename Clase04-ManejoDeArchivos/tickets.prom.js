const { error } = require("console");
const fs = require("fs");

const ruta = "./Clase04-ManejoDeArchivos/data/events.prom.json";
// con el null y cn el 2 el codigo es mas ordenado se recomienda ponerlo
const contenido = JSON.stringify([{ title: "Harry Potter 1" }], null, 2);

// con estos datos estamos usando las promesas siempre con then y catch
fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

let configuracion = "utf-8";
fs.promises
  .readFile(ruta, configuracion)
  // pasamos con un parseo un objetos de js
  .then((resultado) => console.log(JSON.parse(resultado)))
  .catch((error) => console.log(error));

// fs.promises
//   .unlink(ruta)
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error));
