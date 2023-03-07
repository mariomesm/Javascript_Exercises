/**
 * 2.- Crear una función que reciba un array de strings y
 *  devuelva un nuevo array con los strings ordenados alfabéticamente
 */
//input: ["hola","adios","fin"]
//output: ["adios","fin","hola"]

const getOrder = (array)=>array.sort()
let names = ["Israel", "Charles", "David"]
console.log(getOrder(names))

