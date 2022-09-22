/**
 *  add(x, y)
    subtract(x, y)
    multiply(x, y)
    divide(x, y)
    pi // constant set to 3.14
 */

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}
const pi = 3.14;

let exp = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    pi: pi
}
//module.exports = exp;
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.pi = pi;


