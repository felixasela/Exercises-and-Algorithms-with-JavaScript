// Write a program that asks the user for two words and indicates which word is longer and by how many letters

const longestWord = (word1, word2) => {
    let lengthWord1 = word1.length;
    let lengthWord2 = word2.length;

    if (lengthWord1 > lengthWord2) {
        document.write("La palabra 1 es mas larga que la 2 y tiene " + lengthWord1 + " caracteres")
    }
    else{
        document.write("La palabra 2 es mas larga que la 1 y tiene " + lengthWord2 + " caracteres")
    }
}

let word1 = prompt("Ingrese la primera palabra: ");
let word2 = prompt("Ingrese la segunda palabra: ");
longestWord(word1, word2);
