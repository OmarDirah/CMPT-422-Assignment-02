import {System} from "../System";
import { Hardware } from "./Hardware";
import {ClockListener} from "./imp/ClockListener"
export class Cpu extends Hardware implements ClockListener{
  // counter for internal clock on cpu
    public cpuClockCount : number;


    constructor() {
        super();
    }

    //Pulse internal clock for cpu
    pulse(){



          console.log("[ HW - " + this.name + ": 0-" + this.id + "]: " + "  - CPU CLOCK COUNT : " + this.cpuClockCount);
          this.cpuClockCount++;

    }
}
