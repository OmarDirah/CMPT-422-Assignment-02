export class Hardware {
//Parent Class for all hardware classes contains name of hardware and the ID of the hardware
name: string;
id: number;
debug: boolean = true;
  constructor() {
    


    }

    // Display log on hardware if degbug is true
    public log(message: string) {

        if (this.debug) {
            console.log("[ HW - " + this.name + ": 0-" + this.id + "]: " + message);
        }
  }

}
