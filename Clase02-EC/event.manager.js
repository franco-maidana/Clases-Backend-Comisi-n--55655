// Registrador de tikcets de eventos
class EventManager {
  // propiedad estatica o de la clase
  // se agrega todos los eventos que se vallan creando
  static Events = [];
  // se agrega un static privada de la clase => se usa solo dentro de la clase
  static #perGain = 0.3; // => 0.3 es el 30%
  static #totalGain = 0; // => total de las ganancias
  // se agrega e contructorpara contruir el evento que vamos a usar
  constructor(data) {
    // si el array no tiene ningun eleento el primer id va 1 si tiene el segundo tramo hace qque busque el ultimo
    // evento guardado busque el id y en ese id le suma uno
    this.id =
      EventManager.Events.length === 0
        ? 1
        : EventManager.Events[EventManager.Events.length - 1].id + 1;
    this.name = data.name;
    this.place = data.place;
    this.price = data.price || 10;
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date();
    EventManager.Events.push(this);
  }
  // aca creamos los elementos con los mismos parametros que arriba pero lo hacemos diferentes
  create(data) {
    const event = {
      id:
        EventManager.Events.length === 0
          ? 1
          : EventManager.Events[EventManager.Events.length - 1].id + 1,
      name: data.name,
      palce: data.place,
      price: data.price || 10,
      capacity: data.capacity || 50,
      date: data.date || new Date(),
    };
    EventManager.Events.push(event);
  }
  read() {
    return EventManager.Events;
  }
  readById(id) {
    return EventManager.Events.find((each) => each.id === Number(id));
  }
  soldTicket(quantity,eventId){
    const event = this.readById(eventId) // => guardo el evento a modificar (al vender la entradas tengo que disminuir la capacidad)
    event.capacity = event.capacity - quantity
    // tengo que sumar (cantidad * precio * %ganancia)
    EventManager.#totalGain = EventManager.#totalGain + quantity*event.price*EventManager.#perGain
    return true
  }
  getGain() {
    return EventManager.#totalGain
  }
}

const events = new EventManager({
  name: "harry potter1",
  place: "showcase",
});
events.create({
  name: "harry potter2",
  place: "showcase",
});
events.create({
  name: "harry potter3",
  place: "showcase",
});
events.create({
  name: "harry potter4",
  place: "showcase",
});

// console.log(HarryPotter);
// console.log(EventManager.Events);
// console.log(events.read());
// console.log(events.readById(2));
events.soldTicket(8,1)
events.soldTicket(5,2)
events.soldTicket(15,3)
console.log(events.read())
