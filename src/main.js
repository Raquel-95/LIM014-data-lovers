
import {dataSort} from './data.js'
import allCharacters from './data/rickandmorty/rickandmorty.js';

// Ordenando la data alfabeticamnete
/*
const orderAll = allCharacters.sort((a,b) => {
  if (a.name > b.name ) {
    return 1;
  }
  if (a.name < b.name ) {
    return -1;
  }
  return 0;
})
console.log(orderAll.reverse()) */

// ****************************************************


const getListAllCharacters = () => {
  drawResults(allCharacters);
 
}
  
// Array and pagination
function drawResults(arrayOfCharacters){
  drawCharactersPage(0,arrayOfCharacters);
  const buttonsContainer=document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML="";
  
  for (let pageIndex = 0; pageIndex < arrayOfCharacters.length; pageIndex = pageIndex + 20) {
          const button = document.createElement("button");
          const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
          button.appendChild(buttonText);
  
          if (pageIndex == 0) button.classList.add('active');
  
          button.addEventListener('click', function () {
              pageIndex == pageIndex;
              drawCharactersPage(pageIndex, arrayOfCharacters);
              let currentButton = document.querySelector(".buttonsContainer button.active");
              currentButton.classList.remove("active");
              button.classList.add("active");
          });
          buttonsContainer.appendChild(button);
      }

}

// print cards

function drawCharactersPage (index,arrayOfCharacters) {
  //muestra 20 personajes por página
  
  let pageOfCharacters = arrayOfCharacters.slice(index, index+20);
  //imprimir en el html 
  const elementOrderedList=document.getElementById('cards');
  elementOrderedList.innerHTML="";
  
  // recorriendo las cartas y poniendo los datos
  // Un bucle for se compone de una instrucción en la cual una variable contador se define y se incrementa hasta el límite tope que hayamos puesto.
  // En este caso, la variable i será el contador del bucle e irá incrementando en cada iteracción.
  for ( let i = 0 ; i < pageOfCharacters.length ;i++ ){
    // declaramos una constante
    const result=pageOfCharacters[i];
    //crear un nodo div 
    const elementDiv= document.createElement("div");
    // Command Substitution  (backtick `…`)
    //    The purpose of command substitution is to evaluate the command which is placed inside the backtick and provide its result as an argument to the actual command.
    // The command substitution can be done in two ways one is using $(…) and the other is `…`. Both work same, but the $(…) form is the modern way and has more clarity and readability.
    
    elementDiv.innerHTML =`
      <h3 class="h3List" >${result.name}</h3>
      <img class="imageList" src="${result.image}" alt="${result.name}"/>
      <section class="dataCard">
        <p> Status: <span> ${result.status} </span></p>
        <p> Especie: <span> ${result.species} </span></p>
        <p> Gender: <span> ${result.gender} </span></p>
      </section>
      `
      elementOrderedList.appendChild(elementDiv);

      elementDiv.addEventListener('click', () => {
        showModal(result);
  
     });

        
  }
}
// *********************************************************************click and show characteres***********
document.querySelector('#btnFirst').addEventListener('click',getListAllCharacters);

// ***************************************************episodios del 1-31

// crear option de selec

function createEpisodes (){
  let episodios = document.getElementById("episodes");
  for (let i = 1; i<=31; i++) {
    let option = document.createElement("option");//1° crear elemento de tipo option.
    let textnode = document.createTextNode(i);// 2° crear elemento de tipo texto.
    option.appendChild(textnode); //3° agrega el elemnto de texto dentro de elemento option.
    episodios.appendChild(option); //4° agrega elemento option dentro de elemento select. 
  }
}
createEpisodes();
// ******************************************************
 function showModal (item) {
  //window.open("#myModal","_self");
  //console.log(item);
  let myModal = document.getElementById('myModal');
  myModal.style.visibility = "visible" ;

  let characterImage = document.getElementById('photoModal');
  characterImage.src = item.image;
  let characterStatus = document.getElementById('statusModal');
  characterStatus.innerHTML = "<b>Status: </b>" + item.status;
  let characterSpecies= document.getElementById('speciesModal');
  characterSpecies.innerHTML = "<b>Specie: </b>" + item.species;
  let characterType= document.getElementById('typeModal');
  characterType.innerHTML = "<b>Type: </b>" + item.type;
  let characterGender= document.getElementById('genderModal');
  characterGender.innerHTML = "<b>Gender: </b>" + item.gender;
  let characterOrigin= document.getElementById('originModal');
  characterOrigin.innerHTML = "<b>Origin: </b>" + item.origin.name;
  let characterLocation= document.getElementById('locationModal');
  characterLocation.innerHTML = "<b>Location: </b>" + item.location.name;
  let characterName = document.getElementById('nameModal');
  characterName.innerHTML = item.name; // innetHTML se usa para cambiar el valor de un p.

  let episodes = "";
  item.episode.forEach(element => {
    episodes += element.slice(40, element.length) + ", ";
  });
  episodes = episodes.slice(0, episodes.length-2) + ".";

  let characterEpisode= document.getElementById('episodeModal');
  characterEpisode.innerHTML = "<b>Episode: </b>" + episodes;


}




const close = document.getElementById("xClose");
close.addEventListener('click', () => {
  let myModal = document.getElementById('myModal');
  myModal.style.visibility = "hidden";
})



// ***********************************************************Searching**************1

const searchBar=document.getElementById('searchByName');
searchBar.addEventListener('keyup',(e) => {
 const searchString= e.target.value.toLowerCase();
 const filteredCharacters = allCharacters.filter(character => {
   return character.name.toLowerCase().includes(searchString);
 });

 drawResults(filteredCharacters)
});



// ***********************************************************click start home**************1
document.querySelector('#btnFirst').addEventListener('click', getEnter );
function getEnter(){
    // *************************************************hide start home ******
    let displayHome = document.getElementById("homeSection");
    displayHome.classList.add("hide");
    // ************************************************show header section******
    let displayLogo=document.getElementById("logoHeader");
    displayLogo.classList.remove("hide");
    // *********************************************show principal nav section******
    let displayPrincipalNav=document.getElementById("nav");
    displayPrincipalNav.classList.remove("hide");
    // **********************************************show search & order section******
    let displaySubheader=document.getElementById("subheaderSection");
    displaySubheader.classList.remove("hide");
    // ************************************************show character section******
    let displayCharacters=document.getElementById("charactersSection");
    displayCharacters.classList.remove("hide");
    // ************************************************show footer section******
    let displayFooter=document.getElementById("footerSection");
    displayFooter.classList.remove("hide");
}




// *******************************************************************************************click and return************2
document.querySelector('#boxName').addEventListener('click', previousMain );
 
function previousMain(){
  // *************************************************show start home ******
  let displayHome = document.getElementById("homeSection");
  displayHome.classList.remove("hide");
  // ************************************************remove header section******
  let displayLogo=document.getElementById("logoHeader");
  displayLogo.classList.add("hide");
  // *********************************************remove principal nav section******
  let displayPrincipalNav=document.getElementById("nav");
  displayPrincipalNav.classList.add("hide");
  // **********************************************remove search & order section******
  let displaySubheader=document.getElementById("subheaderSection");
  displaySubheader.classList.add("hide");
  // ************************************************remove character section******
  let displayCharacters=document.getElementById("charactersSection");
  displayCharacters.classList.add("hide");
  // ************************************************remove oothers about and stat******
  let displayAbout=document.getElementById("aboutSection");
  displayAbout.classList.add("hide");
  let displayStatistics=document.getElementById("statisticsSection");
  displayStatistics.classList.add("hide");
  // ************************************************remove footer section******
  let displayFooter=document.getElementById("footerSection");
  displayFooter.classList.add("hide");
}


// ***********************************************************orde a-z 
const orderAll = document.querySelector("#order");


orderAll.addEventListener( "change" , (event) => {
  console.log(event.target.value);
    document.getElementById("cards").innerHTML="";
    const ordenar = Object.keys(allCharacters).map(key => {
     
      return allCharacters[key];
    })
   
    let sortData =dataSort(ordenar,"name",event.target.value);
   
  
    
          // const ordenO = Object.entries(sortData);
     const ordenO = sortData;
     console.log(sortData);   
               
     return drawResults(ordenO);  
  
    
  });
  console.log(allCharacters)