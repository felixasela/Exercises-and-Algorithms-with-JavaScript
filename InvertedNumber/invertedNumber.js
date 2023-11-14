/* Write a program that prompts the user for a three-digit integer and outputs the digits in reverse order */

const invert = (number) => number.split("").reverse().join("");

const number = parseInt(prompt("Ingrese un numero de 3 digitos:"));

if (!isNaN(number) && number.toString().length === 3 && number % 1 === 0) {
    const invertedNumber = invert(number.toString());
    document.write("El numero invertido es: " + invertedNumber);
} else {
    document.write("El numero ingresado no es un entero de 3 dígitos válido");
}


