// funciones son bloques de codigos que pueden ser llamodos en diferentes momentos de la ejecucion de nuestro programa

/*
  una Callbacks es una funcion que se pasa como parametro (argumento) para poder ser utilizado por otra funcion
  se recomienda immplementar la cb como ultimo parametro de la funcion,

  cuando pasamos una callbcks, lo haceos porque no siempre sabemmos que queremos que se ejecute en cada caso de nuestra funcion

  los metodos forEach/map/filter son ejeplo de una funcion que se pasa como parametro de otra funcion
*/

const suma = (num1, num2) => num1 + num2;
// return implicito por estar en una sola linea

function restar(num1, num2) {
  return num1 - num2;
}

function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2);
  console.log("el resultado es:" + resultado);
}

// usamos las funciones de suma  y resta como argumentos  (Callbacks)
calcular(2, 2, suma);
calcular(2, 2, restar);

// usamos una funcion flecha pero al mismo tiempo es una funcion anonima
//definimos una función flecha para la operación multiplicar
calcular(8, 2, (num1, num2) => num1 * num2);

//definimos una función tradicional para la operación dividir
calcular(8, 2, function (num1, num2) {
  return num1 / num2;
});

// agarra todos los numeros divisorios y puede tirar erros
function dividir(n1, n2, funcionManejadoraDelError) {
  if (n1 && n2 !== 0) {
    funcionManejadoraDelError(null, n1 / n2);
  } else {
    funcionManejadoraDelError("n1 no existe o n2 es 0");
  }
}
// agarra todo los numeros elevado y los multiplica puede tirar error si faltan parametros
function elevado(num1, num2, funcionManejadoraDelError) {
  if ((num1 || num1 === 0) && (num2 || num2 === 0)) {
    return funcionManejadoraDelError(null, num1 ** num2);
  } else {
    return funcionManejadoraDelError("faltan parametros");
  }
}
// esta funcion es la que manda los resultados si son correctos o si son incoorectos los dice aca
function funcionManejadoraDelError(error, exito) {
  if (error) {
    console.log("ocuurrio un error:", error);
  } else {
    console.log("el resultado de la operacion es:", exito);
  }
}
// esta funcion coloca los argumentos y les pone un numero y manda a la otra funcion para que realize los llamados
async function calcular(n1, n2, operacion) {
  // operacion(n1, n2, funcionManejadoraDelError);
  try {
    console.log(await operacion(n1, n2,))
  } catch (error) {
    console.log(error)
  }
}
// async await se usa en conjunto con el try/catch

// llamado a la funcion aca se le agrega los parametros (numeros y llama a una funcion para que haga la cuenta )
// calcular(2, 5, elevado);
// calcular(10, 2, dividir);
// calcular(10, 0, dividir);
// calcular(2, null, elevado);

// callbcks anidados

// divir con promesa es una fusion de divid+funcionManejadorDeError
function dividirConPromesa (n1 , n2) {
  return new Promise((promesaResuelta, promesaError) => {
    if (n1 && n2 !==0) {
      promesaResuelta('el resultado de la operacion es:' + n1 / n2)
    }else {
      promesaError('ocurrio el error no existe n1 o n2 es cero ')
    }
  })
}

calcular(10,5,dividirConPromesa)
calcular(10,0,dividirConPromesa)