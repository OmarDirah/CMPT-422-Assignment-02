import {System} from "../System";
import { Hardware } from "./Hardware";
import {ClockListener} from "./imp/ClockListener"
export class Cpu extends Hardware implements ClockListener{
    cpuClockCount : number ;


    constructor() {
        super();
    }

    pulse(){

        console.log("- CPU Clock Count: " + this.cpuClockCount);
        this.cpuClockCount++;


    }
}
