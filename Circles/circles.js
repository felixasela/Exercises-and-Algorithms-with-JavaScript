/* Write a program that receives the radius of a circle as input and delivers its perimeter and area as output */

const pi = 3.1426;

const areaCircle = (radius, pi) => Math.pow(radius, 2) * pi;

const perimeterCircle = (radius, pi) => 2 * radius * pi;

let radius = parseFloat(prompt("Ingrese el radio del círculo:"));

const area = areaCircle(radius, pi);
const perimeter = perimeterCircle(radius, pi);

document.write("El área del círculo es: " + area.toFixed(2) + "<br>");
document.write("El perímetro del círculo es: " + perimeter.toFixed(2));


