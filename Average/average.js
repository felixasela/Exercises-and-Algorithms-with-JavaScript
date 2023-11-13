// Write a program that calculates the average of four notes input by the user.

const calculateAverage = (noteOne, noteTwo, noteThree, noteFour) => (noteOne + noteTwo + noteThree + noteFour) / 4;

let noteOne = parseFloat(prompt("Ingrese la nota 1:"));
let noteTwo = parseFloat(prompt("Ingrese la nota 2:"));
let noteThree = parseFloat(prompt("Ingrese la nota 3:"));
let noteFour = parseFloat(prompt("Ingrese la nota 4:"));

const average = calculateAverage(noteOne, noteTwo, noteThree, noteFour);

document.write("El promedio de notas es: " + average.toFixed(2));