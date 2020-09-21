// import statements for hardware
import {Cpu} from "./hardware/Cpu";
import { Hardware } from "./hardware/Hardware";
import {Memory} from "./hardware/Memory";


/*
    Constants
 */
// Initialization Parameters for Hardware
// Clock cycle interval
const CLOCK_INTERVAL= 500;               // This is in ms (milliseconds) so 1000 = 1 second, 100 = 1/10 second
                                        // A setting of 100 is equivalent to 10hz, 1 would be 1,000hz or 1khz,
                                        // .001 would be 1,000,000 or 1mhz. Obviously you will want to keep this
                                        // small, I recommend a setting of 100, if you want to slow things down
                                        // make it larger.


export class System extends Hardware {

    private _CPU: Cpu = null;
    private _MEMORY: Memory = null;
    public timestamp: string = Date();// timestamp for when object is created
    public running: boolean = false;


    constructor() {

      super();








        /*
        Start the system (Analogous to pressing the power button and having voltages flow through the components)
        When power is applied to the system clock, it begins sending pulses to all clock observing hardware
        components so they can act on each clock cycle.
         */

        this.startSystem();





    }

    public startSystem(): boolean {
      // Give cpu name and id
        this._CPU = new Cpu;
        this._CPU.name = "CPU";
        this._CPU.id = 1567893457;
        this._CPU.log("created");
        this._CPU.cpuClockCount = 1;

        this._MEMORY = new Memory;
        this._MEMORY.name = "RAM";
        this._MEMORY.id = 1545879633;
        this._MEMORY.hexIntialize();
        //this._MEMORY.hexDisplay();

      //console.log(this._CPU.cpuClockCount);
        let tempCPU = this._CPU;
        let tempRam = this._MEMORY;




        setTimeout(function(){tempCPU.pulse()},CLOCK_INTERVAL);
        setTimeout(function(){tempRam.pulse()},CLOCK_INTERVAL);
        setTimeout(function(){tempCPU.pulse()},CLOCK_INTERVAL);







        return true;
    }

    public stopSystem(): boolean {

        return false;

    }

    public hexValue(num: number, length: number){
          let  value : number = num;
          console.log(value.toString(length).toUpperCase);

    }
}
//Create system object give it an id and name and print log
let system: System = new System();


system.name = "System";
system.id = 1;
system.log(system.timestamp);
