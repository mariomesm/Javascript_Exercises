const water = () => console.log("Calentar Agua")
const aboutJelly = () => console.log("Vertir el sobre ")
const mix = () => console.log("Enfriar mezcla")
const eat = () => console.log("Ya puedes comer tu gelatina!")

const  prepareJelly = (cb1,cb2,cb3,cb4) => {

    setTimeout(cb1,0)
    setTimeout(cb2,5000)
    setTimeout(cb3,10000)
    setTimeout(cb4,15000)
}

let resultJelly = prepareJelly (water,aboutJelly,mix,eat)
