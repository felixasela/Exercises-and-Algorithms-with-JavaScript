// Write a program that generetes the pascal triangle

const calculateBinomialCoefficient = (n, k) => {
    const factorial = (num) => (num === 0 || num === 1) ? 1 : num * factorial(num - 1);
    return factorial(n) / (factorial(k) * factorial(n - k));
};

const printPascalsTriangle = (rows) => {
    for (let i = 0; i < rows; i++) {
        document.write('<div style="white-space: pre;">');

        for (let j = 0; j < rows - i; j++) {
            document.write(" ");
        }

        for (let k = 0; k <= i; k++) {
            document.write(`${calculateBinomialCoefficient(i, k)} `);
        }

        document.write('</div>');
    }
};

const numberOfRows = parseInt(prompt("Enter the number of rows for Pascal's Triangle:"));

printPascalsTriangle(numberOfRows);


