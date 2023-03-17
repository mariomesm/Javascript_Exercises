import { getId } from "./api.js"
import { createCardDetail } from "./dom.js"

let urlParame = new URLSearchParams(window.location.search)
let person = urlParame.get("id")

const selectUser = async ()=>{
    let user = await getId(person)
    return user
}
const setCard = async ()=>{
    let character = await selectUser()
    let principal = document.querySelector("#card-serie")
    let {image,name,origin,status,species,type,gender} = character
    let{name:or} = origin 
    principal.appendChild(createCardDetail(image,name,status,species,type,gender,or))
}
setCard()


