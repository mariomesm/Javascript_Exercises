/*Ejercicio 1
- Crear un programa que me muestre el mayor de dos números
*/
let number1 = 11
let number2 = 11 

if (number1 > number2){
    console.log(`El numero mayor es ${number1}`)
}else if(number1 < number2){
    console.log(`El numero mayor es ${number2}`)
}else{
    console.log("Los numeros son iguales")
}
/*
Ejercicio 2
- Crear un programa que me muestre el más largo de dos strings 
*/
let myFirstString = "Hola mundo"
let mySecondString = "crear un programa que evalue un string"

if (myFirstString.length > mySecondString.length){
    console.log(`El string mas grande es ${myFirstString}`)
}else if(myFirstString.length < mySecondString.length){
    console.log(`El string mas grande es ${mySecondString}`)
}else{
    console.log("La longitud del string es igual")
}
/*
Ejercicio 3
- Crear un programa que me diga si un número es divisible entre otro número
  - Indicar si el primer número es divisible entre el segundo o indicar si no lo es
*/
let firstNumber = 10
let secondNumber = 2
    if(firstNumber % secondNumber == 0){
        console.log("El numero es divisible")
    }else{
        console.log("El numero no es divisible")
    }
/*
Ejercicio 4
- Crear un programa que evalue un string e indique lo siguiente:
  - Si la cantidad de caracteres es mayor o igual que 10, y la cantidad de caracteres es número par, mostrar (El texto es largo y sus caracteres son pares)
  - Si la cantidad de caracteres es menor que 10, y la cantidad de caracteres es número par, mostrar (El texto es corto y sus caracteres son pares)
  - Si no cumple con alguna de las condiciones anteriores, mostrar (El texto no cumple con alguna especificación)
*/

let isString = "Kodemia me esta ayudando a programaarr"

if(isString.length >= 10 && isString.length %2==0){
    console.log("El texto es largo y sus caracteres son pares")
}else if(isString.length < 10 && isString.length %2 ==0){
    console.log("El texto es corto y sus caracteres son pares")
}else{
    console.log("El texto no cumple con alguna especificación")
}