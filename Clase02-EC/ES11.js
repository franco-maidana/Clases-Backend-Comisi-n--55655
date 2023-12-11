// ternario 
const edad = 33
// (condicion) ? (que pasa si es verdadero) : (que pasa si es falso)
edad>18 ? console.log('sos mayor de edad') : console.log('sos menor de edad') 

// && => retorna siempre el segundo elemento
// (condicion) && (se cumple UNICAMENTE si la condicion es verdadera) 
edad>18 && console.log('se esta imprimiento este log')


const nula = null
const noDefinida = undefined
// (condicion) es nula o undefined ?? (ejecuta lo que esta luego del operador)
nula ?? console.log('la variable es nula o undefined')
noDefinida ?? console.log('la variable es nula o undefined')

