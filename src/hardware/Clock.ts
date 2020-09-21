import { Hardware } from "./Hardware";
export class Clock extends Hardware{
      
      constructor() {
      super();
  }

  cycle(){
        console.log("[ HW - " + this.name + ": 0-" + this.id + "]: " + "Clock Pulse Intiallized");

  }
}
