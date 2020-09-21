import {System} from "../System";
import { Hardware } from "./Hardware";

export class Memory extends Hardware{
    array: number[] = new Array(256);
    constructor() {
        super();

    }
    //Initialization of array of hexadecimal numbers
    public hexIntialize(){
      for(let i = 0x00; i < this.array.length;i++){
        this.array[i] = 0x00 + i;



      }


    }
    // Print out numbers in hex array with proper hex syntax if hex is correct size else display Undefinded number
    public hexDisplay(){
      for(let i = 0;i < 21;i++){
        if(this.array[i] <= 0xff)
        console.log("0x" + this.array[i].toString(16));
        else{
          console.log("Undefinded number");
        }
      }

    }
}
