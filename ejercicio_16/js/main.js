import { getcharacter } from "./api.js";
import { createCard } from "./dom.js";

const getData = async ()=>{
    let character = await getcharacter()
    let principal = document.querySelector("#card-Morty")
    character["results"].forEach(element => {
        let {image,name,origin,id} = element
        let{name:or} = origin 
        console.log(origin)
        principal.appendChild(createCard(image,name,or,id))

    });
}


getData()
