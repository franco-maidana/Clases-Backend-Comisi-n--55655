// Closures
/* es una funcion que puede mantener variable declaradas de manera interna, ademas de contar con una funcion que pueda acceder a ambos ambitos
  tanto el suyo como el de su funcion padre, logrando asi un efecto de variable privada 
   */

class persona {
  // cada vez que pase por el constructor va a llamar a la persona y pasa por el contador 
  constructor(nombre, apellido, edad, ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad = ciudad;
    this.agregrarContador()
    this.ordenDeRegistro = persona.cantidadDePersonas
  }
  // definimos una variable estatica de la clase osea de la persona 
  static cantidadDePersonas = 0;
  imprimir() {
    console.log(this);
  }
  imprimirNombreCompleto = () => console.log(this.nombre, this.apellido);
  agregrarContador = () => (persona.cantidadDePersonas++)
}

// agregamos los datos nuevos de la persona
const alumno = new persona("franco", "maidana", 29, "la plata");
alumno.imprimir();
alumno.imprimirNombreCompleto();
console.log(alumno.edad);
console.log(alumno.ciudad);

// pasamos los datos nuevos de la persona
const alumna = new persona("sofia", "gimenez", 29, " mendoza");
alumna.imprimir();
alumna.imprimirNombreCompleto();
console.log(alumna.edad);
// para acceder a propiedades de las instancias de las clase 
console.log(alumna.ciudad);

// para acceder a las propiedades estaticas o de la clases
console.log(persona.cantidadDePersonas)

console.log(alumno.ordenDeRegistro)
console.log(alumna.ordenDeRegistro)