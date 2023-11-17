// Write a program that converts centimeters to inches. One inch is equal to 2.54 centimeters.

const inch = 2.54;

const converter = (centimeter, inch) => centimeter * inch;

let centimeter = parseFloat(prompt("Ingrese la longitud en centimetros que desea convertir:"));

const totalConvert = converter(centimeter, inch);

document.write(centimeter + " cm son equivalentes a " + totalConvert + " in")
