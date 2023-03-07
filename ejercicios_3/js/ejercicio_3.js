/*3.- Crear una función que reciba un array de strings y devuelva un nuevo array con los strings invertidos*/

// input "hola"         separar el string por caracteres  "h","o","l","a" metodo split()
//output "aloh"         invertir el arreglo  "a","l","o","h" con el metodo reverse()

const arrayReverse = (arrayString)=>{
    let invert = []
    for(let i=0; i<arrayString.length; i++){
        let item = arrayString[i]
        invert.push(item.split("").reverse().join(""))
    }
    return invert
}
console.log(arrayReverse(["Israel", "Charles", "David"]))