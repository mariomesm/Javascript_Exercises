/*
1.- Crear una funcion que reciba un nombre y nos entregue un nuevo string 
con la letra inicial y la letra final de ese nombre
    input => Israel
    output => Il
*/
const getName = (str) => `${str.charAt(0)}${str.charAt(str.length-1)}`

console.log(getName("Martinez"))

 //Sin utilizar .chartAt

const getInitial = (str) => `${str[0]}${str[str.length-1]}`

console.log(getInitial("Mario"))

//Sin metodos 

const getNameInitial = (str) => {
  let count = 0
  let array = []
  for(let i=0; i<i+1 && !array == " ";i++){
    array = str[i]
    count ++
  }
  let result1 = `${str[0]}${str[count-2]}`
  return result1
} 

console.log(getNameInitial("Mario"))