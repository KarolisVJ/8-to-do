class Car {
    constructor(pav) {
        this.engine = false;
        this.tank = 5;
        this.consumption = .025;
        this.milage = 0;
        this.name = pav;
    }

    turnOn() {
        console.log(this.engine);
        if(this.engine) {
            this.engine = false;
            console.log ('Sudeginai starterį!')}
                else {
            this.engine = true;
            console.log("You just turned the car ON-ON-ON! Vroom!")}
            }
    

    drive(dist) {
        if (!this.engine) {
            console.log ('Reikia mašiną užvest!');
            return false
        }else{

        this.tank = this.tank - this.consumption * dist;
        this.milage += dist;
        console.log(`Bake liko ${this.tank} litro degalų, nuvažiuota ${this.milage} km`);
        if(this.tank <= 0) {
            console.log('Degalai baigėsi');
            this.engine = false;
            console.log ('Variklis issijunge', this.engine)}
        }

    }
    turnOff() {
        this.engine = false;
        console.log ('Išjungei variklį');
    }


}



export { Car }