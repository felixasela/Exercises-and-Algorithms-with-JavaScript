// Write a program that outputs the decimal part of a real number input by the user.

const decimalPart = (number) => number - Math.floor(number);

let number = parseFloat(prompt("Ingrese el numero: "))
let decimalNumber = decimalPart(number)

document.write("La parte decimal de el numero es: " + decimalNumber)