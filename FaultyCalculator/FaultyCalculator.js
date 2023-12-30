
function RandomNumberGenetaror() {
  let random = Math.random() * 100;
  if (random < 10) {
    return true;
  } else {
    return false;
  }
}
let a ;
function Calculator(x, y, operation, a=RandomNumberGenetaror()) {
  if (operation == "+" && a == true) {
    console.log(`The sum of ${x} & ${y} is ${x + y}`);
  } 
  else if (operation == "-" && a == true) {
    console.log(`The Subtraction of ${x} & ${y} is ${x - y}`);
  } 
  else if (operation == "*" && a == true) {
    console.log(`The Multiplication of ${x} & ${y} is ${x * y}`);
  } 
  else if (operation == "/" && a == true) {
    console.log(`The Division of ${x} & ${y} is ${x / y}`);
  } 
  else if (operation == "+" && a == false) {
    console.log(`The sum of ${x} & ${y} is ${x - y}`);
  } 
  else if (operation == "-" && a == false) {
    console.log(`The Subtraction of ${x} & ${y} is ${(x / y)}`);
  } 
  else if (operation == "*" && a == false) {
    console.log(`The Multiplication of ${x} & ${y} is ${x + y}`);
  } 
  else if (operation == "/" && a == false) {
    console.log(`The Division of ${x} & ${y} is ${x ** y}`);
  } 
  else {
    console.log("Enter Valid input");
  }

  //   console.log(x, y, operation, a);
  return;
}
Calculator(2, 3, "-");
