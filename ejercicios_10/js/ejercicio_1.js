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
        dateOfBirth:"26/09/1996"
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

const getYears = (array) => {
    let date = array.map (item => item.dateOfBirth.split("/")[2]) 
    let orderAge = date.sort((a,b) => a-b)
    let ageDifference = Math.abs(orderAge[0] - orderAge[orderAge.length -1])
    return `La diferencia de edad entre el koder mas joven y el mas experimentado es de ${ageDifference} años`
}

let result = getYears(koders)
console.log(result)

