class EventManager {
  // variables privada de las clases
  // array vacio
  static #events = [];
  // ganancia del 30 %
  static #perGain = 0.3;
  // total de la ganancia
  static #totalGain = 0;
  constructor() {}
  createEvent({ name, place, ...data }) {
    try {
      // generamos un error para que el try/cath lo tome y lo maneje a su manera
      if (!name || !place) {
        throw new Error("place, insert name & place");
      }
      const event = {
        id:
          EventManager.#events.length === 0
            ? 1
            : EventManager.#events[EventManager.#events.length - 1].id + 1,
        name,
        place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventManager.#events.push(event);
      return event.id;
    } catch (error) {
      return error;
    }
  }
  readyEvents() {
    try {
      if (EventManager.#events.length === 0) {
        throw new Error("not fount events");
      } else {
        return EventManager.#events;
      }
    } catch (error) {
      return error.message;
    }
  }
  readeOne(id) {
    try {
      let one = EventManager.#events.find((each) => each.id === Number(id));
      if (one) {
        return one;
      } else {
        throw new Error("not found event with id " + id);
      }
    } catch (error) {
      return error.message;
    }
  }
  soldTickets(quantity, id) {
    try {
      if (!(quantity > 0)) {
        throw Error("insert valid quantity");
      }
      const one = this.readeOne(id);
      if (quantity > one.capacity) {
        throw new Error("no more capacity");
      }
      one.capacity = one.capacity - quantity;
      EventManager.#totalGain =
        EventManager.#totalGain + EventManager.#perGain * quantity * one.price;
      return one.capacity;
    } catch (error) {
      return error.message;
    }
  }
}

const events = new EventManager();

console.log(events.createEvent({ name: "Harry Potter 1", place: "showcase" }));
console.log(events.createEvent({ place: "showcase" }));
console.log(events.createEvent({ name: "Harry Potte 2 " }));
console.log(events.createEvent({ name: "Harry Potter 3", place: "showcase" }));
console.log(events.readyEvents());
console.log(events.readeOne(1));
console.log(events.readeOne(3));
console.log(events.soldTickets(1, 1));
console.log(events.soldTickets(100, 2));
console.log(events.soldTickets(10, 1));
