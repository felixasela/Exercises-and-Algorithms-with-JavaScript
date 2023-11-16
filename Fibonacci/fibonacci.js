// Write a program that generates the Fibonacci sequence.

const fibonacci = (n) => {
    let fibSequence = [0, 1];
  
    while (fibSequence.length < n) {
      let nextTerm = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      fibSequence.push(nextTerm);
    }
  
    return fibSequence;
}
  
let n = parseInt(prompt("Ingrese la cantidad de términos de la secuencia de Fibonacci que desea generar:"));
  
let fibonacciSequence = fibonacci(n);
  
document.write("Secuencia de Fibonacci con ", n, " términos: ", fibonacciSequence);
  