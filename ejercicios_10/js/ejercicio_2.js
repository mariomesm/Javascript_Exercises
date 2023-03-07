let koders = [
    {
        name:"Isra",
        dateOfBirth:"09/27/1989"
    },
    {
        name:"Rodolfo",
        dateOfBirth:"11/27/1998"
    },
    {
        name:"Kim",
        dateOfBirth:"11/15/1996"
    },
    {
        name:"Iyari",
        dateOfBirth:"09/26/1996"
    },
    {
        name:"Manu",
        dateOfBirth:"11/21/1986"
    },
    {
        name:"Antonio",
        dateOfBirth: "07/23/1993"
    },
    {
        name:"Rafa",
        dateOfBirth:"03/11/1997"
    },
    {
        name:"Eddie",
        dateOfBirth:"11/05/1997"
    },
    {
        name:"Jesus",
        dateOfBirth: "11/04/2000"
    },
    {
        name:"Mar",
        dateOfBirth: "12/18/1994"
    },
    {
        name:"Roberto",
        dateOfBirth:"01/14/1985"
    },
    {
        name:"Javi",
        dateOfBirth:"12/07/1993"
    },
    {
        name:"Mario",
        dateOfBirth:"11/02/1999"
    },
];
/*
Usando la lista de nombres y fechas de nacimiento de los koders, se requiere obtener una nueva lista 
que contenga el nombre del koder y el tiempo que falta para su cumpleaños (en días y meses), o en caso 
de que su cumpleaños ya haya ocurrido, el tiempo en días y meses que ha pasado desde entonces
*/
 const getDaysHappy = (array) =>{
    let date = array.map((item)=>{
        let {name,dateOfBirth} = item
        let Arraybirthdate = dateOfBirth.split("/")
         Arraybirthdate[2] = new Date().getFullYear()
         let birthday = new Date(Arraybirthdate.join("/")).getTime()
         let days = Math.trunc((birthday - Date.now())/ (1000*60*60*24))
         let description
         let finalDays = days % 30 
            if(days > 0 && days > 30){
                description = `Faltan ${(days- finalDays) / 30} meses y ${finalDays} dias`
            }else if(days > 0 && days < 30 ){
                description = `Faltan ${finalDays} dias `
            }else{
                description = `Tu cumpleaños fue hace ${Math.abs(days-finalDays) / 30} meses y ${Math.abs(finalDays)} dias`
            }
         return{
            name,
            dateOfBirth,
            birthdayTime: description
         }
    })
    return date
 }
 let result = getDaysHappy(koders)
console.log(result)