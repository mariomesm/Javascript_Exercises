const water = () => console.log("El agua esta irviendo")
const aboutJelly = () => console.log("El sobre esta vertido")
const mix = () => console.log("La mezcla esta enfriándose")
const eat = () => console.log("Ya puedes comer tu gelatina!")

const  prepareJelly = (cb1,cb2,cb3,cb4) => {

    cb1()
    cb2()
    cb3()
    cb4()
}

let resultJelly = prepareJelly (water,aboutJelly,mix,eat)
