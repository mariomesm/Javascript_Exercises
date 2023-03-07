/**5.- Crear una función que reciba una matriz de nombres y apellidos,
 *  y me devuelva un nuevo array con las iniciales de esos nombres
    input:
    [
        ["Israel", "Salinas", "Martinez"],
        ["Charles", "Silva"],
        ["David", "Moranchel"],
        ["Naomi", "López"],
        ["Rose", "Ortega"],
        ["Jose","Luis","Antonio","Diosdado","Vega"]
    ]
    output:
    [
        "I.S.",
        "C.S.",
        "D.M.",
        "N.L.",
        "R.O.",
        "J.L.A.D.V."
    ]
 */
    const initialsName = (matriz) => {
        let string
        let array=[]
        for(let i=0; i<matriz.length; i++){
            string = ""
            for(let j=0; j<matriz[i].length;j++){
                string = string + matriz[i][j].charAt(0) + "."
            }
            array.push(string)
        }
        return array
    }
    
    let names=[
        ["Israel", "Salinas"],
        ["Charles", "Silva"],
        ["David", "Moranchel"],
        ["Naomi", "López"],
        ["Rose", "Ortega"],
        ["Jose","Luis","Antonio","Diosdado","Vega"]
    ]
    
    console.log(initialsName(names))