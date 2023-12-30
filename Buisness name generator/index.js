// /* Create a business name generator by combining list of adjectives and shop name and another word*/
function Randomnum(val) {
    return Math.floor(Math.random() * val);
}
function Adjectives() {
  let a = "Crazy";
  let b = "Amazing";
  let c = "Fire";
  let adjectives= checkValue(a,b,c)
  return adjectives;
}

function ShopName() {
  let a = "Engine";
  let b = "Foods";
  let c = "Garments";
  let shopname= checkValue(a,b,c)
  return shopname;
}

function AnotherWord() {
  let a = "Bros";
  let b = "Limited";
  let c = "Hub";
  let anotherword= checkValue(a,b,c)
  return anotherword;
}
function checkValue(a, b, c) {
  let d = Randomnum(3);
  if (d === 0) {
    return a;
  } else if (d === 1) {
    return b;
  } else if (d === 2) {
    return c;
  }
}
let name = (`${Adjectives()} ${ShopName()} ${ AnotherWord()}`);
console.log(`The buisness name is ${name}`);
let d = Randomnum(3);