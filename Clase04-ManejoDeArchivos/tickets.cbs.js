const { error } = require("console");
const fs = require("fs");

const ruta = "./Clase04-ManejoDeArchivos/data/events.cbs.json";
const contenido = JSON.stringify(
  [
    { title: "Harry Potter 1 " },
    { title: "Harry Potter 2" },
    { title: "Harry Potter 3" },
  ],
  null,
  2
);

// para crear  o sobrescribir un archivo de manera asincrona

fs.writeFile(ruta, contenido, (error) => {
  if (error) {
    console.log(error);
    // se recommienda retornar error.menssege
    return error;
  }
});

// para leer el archivo de forma asincrona

const configuracion = "utf-8";
fs.readFile(ruta, configuracion, (error, exito) => {
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log(exito);
    return exito;
  }
});

// para eliminar el archivo de forma asincrona

// fs.unlink(ruta, (error) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
// });
