constructor(xPos, yPos, flying, quaking){
    this.xPos = xPos;
    this.yPos = yPos;
    this.flying = flying;
    this.quaking = quaking;
};

takeOff(){
    this.flying = true;
};

land(){
 this.flying = false;
};

startQuacking(){
    this.quacking = true;
};

stopQuacking(){
    this.quacking = false;
};

moveTo(x, y){

    this.x = x;
        
    this.y = y;
        
    let txtFly = (this.flying) ? "flying" : "swimming";
        
    let txtQuack = (this.quacking) ? "while quacking" : "";
        
    console.log(`Duck is ${txtFly} to ${x},${y} ${txtQuack}`);
        
}

}

module.exports = duck;

// testDuck.js

const duck = require('./duck');

let myDuck = new Duck(0, 0, false, false);

myDuck.move(5, 10);

myDuck.startQuacking();

myDuck.move(5, 10);

myDuck.takeOff();

myDuck.stopQuacking();

myDuck.move(5, 10);

myDuck.startQuacking();

myDuck.move(5, 10);


inputTag = $("<input>", {
    type: "text", 
    name: "hello", 
    value: "hello world" 
}
);

$("#helloForm").append(inputTag);
inputTag = $("<input>", {
    type: "text", 
    name: "hello", 
    value: "hello world" 
}
);

$("#helloForm").append(inputTag);
const inputTag = $("<input>", {
type: "text",
name: "hello",
value: "hello world"
}
);

$("#helloForm").append(inputTag);


inputTag = $("<input>", {
    type: "text", 
    name: "hello", 
    value: "hello world" 
}
);

$("#helloForm").append(inputTag);
const inputTag = $("<input>", {
    type: "text",
    name: "hello",
    value: "hello world"
    }
);

$("#helloForm").append(inputTag);


const inputTag = $("<input>", {
   type: "text",
  name: "hello",
 value: "hello world"
  }
    );
    
    $("#helloForm").append(inputTag);