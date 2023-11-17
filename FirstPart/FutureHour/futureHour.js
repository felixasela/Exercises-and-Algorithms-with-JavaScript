/* Write a program that asks the user for the current time on the clock and an integer number of hours
that indicates the future time on the clock after the specified time */

const sumHour = (currentHour, inputHour) => (currentHour + inputHour) % 24

let currentHour = parseInt(prompt("Ingrese la hora actual: "))
let inputHour = parseInt(prompt("Ingrese las horas que desea agregar: "))

let finalHour = sumHour(currentHour, inputHour);

document.write(finalHour);