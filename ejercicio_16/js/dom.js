const createCard = (img,name,origin,id) => {
    // Create card
    let divCard = document.createElement("div");
    divCard.classList.add("col-sm-3","border-2","gap-3","bg-info-subtle");
    let principalDiv = document.createElement("div")
        principalDiv.classList.add("card","mt-4")
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = img;
    // card body
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = name
    let pCard = document.createElement("p");
    pCard.classList.add("card-text");
    pCard.innerText = origin
    let btn = document.createElement("a");
    btn.href = `./cardDetail.html?id=${id}`
    btn.classList.add("btn", "btn-primary");
    let contBtn = document.createTextNode("Ir a detalles")
    btn.appendChild(contBtn)
    // Create content
    
    // Insert content
    divCardBody.append(cardTitle, pCard, btn);
    principalDiv.append(imgCard, divCardBody);
    divCard.appendChild(principalDiv)
    return divCard;
  };

  const createCardDetail = (img,name,status,getSpecie,type,gender,origin) => {
    // Create card
    let divCard = document.createElement("div");
    divCard.classList.add("col-sm-3","border-2","gap-3","bg-info-subtle");
    let principalDiv = document.createElement("div")
        principalDiv.classList.add("card")
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = img;
    // card body
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = name                       //name
    let statPerson = document.createElement("p")
    statPerson.classList.add("card-text")
    statPerson.innerText = `Status:  ${status}`                   ///status
    let speciPerson = document.createElement("p")
    speciPerson.classList.add("card-text")
    speciPerson.innerText= `Especie: ${getSpecie}`                //specie
    let typePerson = document.createElement("p")
    typePerson.classList.add("card-text")
    typePerson.innerText= `Tipo: ${type}`                      //type 
    let genderPerson = document.createElement("p")
    genderPerson.classList.add("card-text")
    genderPerson.innerText = `Genero: ${gender}`                 //gender
    let pCard = document.createElement("p");
    pCard.classList.add("card-text");
    pCard.innerText = `Origen: ${origin}`                        //origin
    // Create content
    
    // Insert content
    divCardBody.append(cardTitle,statPerson,speciPerson,typePerson,genderPerson,pCard);
    principalDiv.append(imgCard, divCardBody);
    divCard.appendChild(principalDiv)
    return divCard;
  };
  
  export { createCard,createCardDetail};