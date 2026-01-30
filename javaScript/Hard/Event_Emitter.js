class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(data));
    }
  }

  off(event, listener) {
    this.events[event] =
      this.events[event]?.filter(fn => fn !== listener);
  }
}


const emitter = new EventEmitter();

function onLogin(user) {
  console.log("User logged in:", user);
}

emitter.on("login", onLogin);
emitter.emit("login", { name: "Mahesh" });
emitter.off("login", onLogin);
emitter.emit("login", { name: "Suresh" }); // No output
export default EventEmitter;

