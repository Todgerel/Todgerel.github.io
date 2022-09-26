function Computer (ram, cpu, storage) {
this.ram = ram;
this.cpu = cpu;
this. storage = storage;
}
Computer.prototype.runProgram = function(program) {
cònsole.log("Running program" + program);

function Laptop(ram, cpu, storage, battery) {
this.ram = ram;
this.cou = cpu;
this.storage = storage;
this.battery = battery;
}
Laptop.prototype.proto= Computer.prototype;}