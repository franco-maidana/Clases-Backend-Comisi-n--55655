const fs = require("fs");

class EventsManager {
  static #perGain = 0.3;
  static #totalGain = 0;
  // static es para que sea una propiedad de la clase
  init() {
    try {
      const exists = fs.existsSync(this.path);
      console.log(exists);
      if (!exists) {
        const data = JSON.stringify([]);
        fs.writeFileSync(this.path, data);
      } else {
        this.events = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        console.log(this.events);
      }
    } catch (error) {
      return error.mensesage;
    }
  }
  constructor(path) {
    this.path = path;
    this.events = [];
    this.init();
  }
}

const events = new EventsManager("./data/fs/files/events.json");
// ESTO ES DEL DESAFIO ENTREGADO NUMERO DOS => APROBADO
