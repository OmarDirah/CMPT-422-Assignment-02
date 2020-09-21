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

    private _CPU: Cpu = new Cpu;
    private _MEMORY: Memory = new Memory;
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

        // Give cpu name and id
        this._CPU.id = 1;
        this._CPU.name = "CPU";
        this._CPU.cpuClockCount = 1;
        this._MEMORY.hexIntialize();
        this._MEMORY.hexDisplay()
        this._CPU.log(this.timestamp);
        console.log(this._CPU.cpuClockCount);
        setInterval(this._CPU.pulse,CLOCK_INTERVAL);


    }

    public startSystem(): boolean {


        this._CPU.debug = true;






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
