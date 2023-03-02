/*
1.- Crear una funcion que reciba un nombre y nos entregue un nuevo string 
con la letra inicial y la letra final de ese nombre
    input => Israel
    output => Il
*/
const getName = (str) => {
    let longString = str.length
    let newString = str.charAt(0) + str.charAt(longString-1)
    return newString
}
 let result1 = getName("Juan")
 console.log(result1)