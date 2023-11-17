 /* Write a program that prompts the user to input the lengths of the two cathetus, 'a' and 'b'
of a right-angled triangle, and outputs the length of the hypotenuse 'c' using the Pythagorean theorem */

const pythagorasTheorem = (cathetusA, cathetusB) => {
    cathetusA = Math.pow(cathetusA, 2);
    cathetusB = Math.pow(cathetusB, 2);
    let sumCathetus = cathetusA + cathetusB;
    let cathetusC = Math.sqrt(sumCathetus);
    return cathetusC;
}

const cathetusA = parseFloat(prompt("Ingrese el cateto A:"));
const cathetusB = parseFloat(prompt("Ingrese el cateto B:"));
const result = pythagorasTheorem(cathetusA, cathetusB)

document.write("La longitud del cateto C es de: " + result.toFixed(2))


