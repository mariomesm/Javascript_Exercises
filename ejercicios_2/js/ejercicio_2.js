/*2.- crear una función que me devuelva el resultado de la suma de 2 números*/

const functionSuma = (num1,num2) => num1 + num2
let result1 = functionSuma(10,8)
console.log(result1);

/*3.- crear una función que me devuelva el resultado de la resta de 2 números*/

const fuctionResta = (num1, num2) => num1 - num2
let result2 = fuctionResta(10,8)
console.log(result2);

/*4.- crear una función que me devuelva el resultado de la multiplicación de 2 números*/

const fuctionMultiplicaicon = (num1,num2) => num1 * num2
let result3 = fuctionMultiplicaicon(10,8)
console.log(result3);

/*5.- crear una función que me devuelva el resultado de la división de 2 números*/

const fuctionDivision = (num1,num2) => num1 / num2
let result4 = fuctionDivision(10,2)
console.log(result4);

/*6.- Crear una fución que reciba el nombre de alguna operación aritmética, y 2 números, 
debe devolver el resultado de la operación aritmética indicada, entre los dos números recibidos
   input => 'suma', 2, 3
   output => 5
   input => 'resta', 8, 2
   output => 6
*/

const getArimetic = (num1,num2,arimetic) =>{
    let resul;
    switch(arimetic){
        case "suma": resul = num1 + num2
        break;
        case "resta": resul = num1 - num2
        break;
        case "multiplicacion": resul = num1 * num2
        break;
        case "division": resul = num1 / num2
        break;
        default: "La exprexión que se coloco no coincide con los operadores asignados"
        break;
    }
    return resul
}

let result5 = getArimetic(100,2,"suma")
console.log(result5)
