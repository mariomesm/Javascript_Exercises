/**    4.- Crear una función que reciba un string 
 * y me devuelva la cantidad de palabras que existen en ese string */
//input: "La mejor forma de predecir el futuro es creándolo"
//ouput: 9

let countWords=(string) => string.split(" ").length

console.log(countWords("La mejor forma de predecir el futuro es creándolo"))