// sintaxis basica de una funcion normal
let cuenta = 0;

function contador(numero) {
  cuenta = cuenta + numero;
  console.log(cuenta);
}

contador(2); 
contador(5);
contador(10);

// sintaxis basica de funcion flecha
// primero definir variable por que la funcion flecha se guarda en un espacio de la memoria
// pasamos paraetros terceera y cuarta 
const concatenar = (tercera , cuarta ) => {
  let primera = "hola";
  let segunda = "mundo";
  console.log(primera, segunda , tercera , cuarta);
  console.log(primera + " " + segunda + " " + tercera + " " + cuarta);
  console.log(`${primera} ${segunda} ${tercera} ${cuarta}`);
};
// son los parametros tercera y cuarta
concatenar('soy ','franco');

// scopes 
/* define el alcance de una variable o constante a un cierto contexto. esto permite utilizar el mismo nombre para 
diferentes variables, sin confundir al computador,
  el global afecctara a toddo el nivel del archivo en el que trabajemmos y el local afectara a la funcion o al bloque en el que esta declarado */

  function exampleFuncion () {
    // scopee local esta definida dentro de la funcion 
    const x = 'declarada en el scope local'
    console.log(x)
  }

  exampleFuncion()


  // realizaremos una funcion que corrobore elementos de una lista 

  function corroborar (arreglo) {
    const tiposDeDatos = arreglo.map(cadaUno => ({valor: cadaUno , tiposDeDatos: typeof cadaUno}))
    console.log(tiposDeDatos)
    return tiposDeDatos
  }

  // corroborar([1 , 'hola' , null , false])
  corroborar([NaN, true , "imprimir" , "resultado"])
