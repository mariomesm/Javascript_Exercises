//1.- Crear una función que reciba un array de números y devuelva la suma total de todos los números del array

const getSuma = (arrayNumbers) => {
    let result = 0
    for(let i=0; i<arrayNumbers.length;i++){
        result += arrayNumbers[i]
    }
    return result
}
 let numbers = [34, 12, 3, 8, 76]
 console.log(getSuma(numbers))

 