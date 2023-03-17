const URLAPI = "https://rickandmortyapi.com/api/character/"
const getcharacter = async ()=>{
    let response = await fetch(URLAPI)
    let data = await response.json()
    return data
}

const getId = async (id)=>{
    let response = await fetch(`${URLAPI}${id}`)
    let data = await response.json()
    return data
}

export{getId,getcharacter}
