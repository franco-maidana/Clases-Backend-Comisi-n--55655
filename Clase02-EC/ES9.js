const datos = {
  nombre: "franco",
  apellido: "maidana",
  edad: 29,
};

const datosExtras = {
  ciudad: "la plata",
  nacimiento: 1994,
};

const objetosUnidos = { datos, datosExtras };
console.log(objetosUnidos);

// los tres puntos (...) rompe el objetos y lo convierte en uno solo
const objetosUnidos2 = { ...datos, ...datosExtras };
console.log(objetosUnidos2);

const nombre = objetosUnidos2.nombre;
console.log(nombre);
// desestructuracion: sacar de los objetos las propiedades que nesecito
const { apellido, nacimiento, ciudad , ...restoDeLasPropiedades } = objetosUnidos2;
console.log(apellido);
console.log(nacimiento);
console.log(ciudad);
console.log(restoDeLasPropiedades)

// estructuracion: construye un objeto en base a propiedades que se llama como la variable
const poder = "inteligencia";
const pseudonimo = "ironman";
const equipo = "vengadores";
const heroe = { poder, pseudonimo, equipo };
console.log(heroe);
