import {System} from "../System";
import { Hardware } from "./Hardware";
import {ClockListener} from "./imp/ClockListener"
export class Cpu extends Hardware implements ClockListener{
  // counter for internal clock on cpu
    public cpuClockCount : number;


    constructor() {
        super();
    }
    // display cpu clock counter then increase counter by one

    public logs(){
      console.log(this.cpuClockCount);
    }
    //Pulse internal clock for cpu
    pulse(){



          console.log(this.cpuClockCount);
          this.cpuClockCount++;

    }
}
