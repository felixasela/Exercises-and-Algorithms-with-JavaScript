/* Write a program that receives the radius of a circle as input and delivers its perimeter and area as output */

const pi = 3.1426;

let areaCircle = (radio, pi) => Math.pow(radio, 2) * pi;

const perimeterCircle = (radio, pi) => 2 * radio * pi;

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

const area = areaCircle(radio, pi);
const perimeter = perimeterCircle(radio, pi);

document.write("El área del círculo es: " + area.toFixed(2) + "<br>");
document.write("El perímetro del círculo es: " + perimeter.toFixed(2));


