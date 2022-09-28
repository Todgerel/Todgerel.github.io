class Computer{

constructor(cpu, ram, storage){
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
}

runProgram(program){
    console.log("running: " + program);
}

}
class Laptop extends Computer{
    constructor(cpu, ram, storage, battery){
    super(cpu, ram, storage);
    this.battery = battery;
}
carryAround(){
    console.log("carrying laptop: cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery);
}
}