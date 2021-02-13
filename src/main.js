import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example());


// import { everithingData } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// estas funciones son de ejemplo
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


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

function loadAll (){ //función para cargar/mostrar las tarjetas.
  let cards = document.getElementById("cards"); // vincula el elemento con id "cards" que es un article a la variable cards.
  cards.innerHTML=''; // para poder borrar el contenido de cards.
 
  data.results.forEach(function(valor, 
   // indice, array
   ){ //forEach sirve para recorrer los elementos de la lista results que está dentro de data. Dentro de forEach debe haber una función con parámetros valor, indice y array.
   
    let card = document.createElement("figure"); //1° crear un elemento en html de tipo figure.
    
    let imageCard = document.createElement("img");//2° crear un elemento en html de tipo img.
    let nameCard = document.createElement("figcaption"); //3°crear un elemento en html de tipo figcaption.
  
    let textnode = document.createTextNode(valor.name); //4°crear nodo de texto con el contenido del nombre del personaje.
    imageCard.src = valor.image; //5° cambia la propiedad src de elemento de imagen "img".
 
    nameCard.appendChild(textnode);//añade la variable textnode que contiene el texto con el nombre a la variable nameCard.
    card.appendChild(nameCard);//añade la variable nameCard que contiene figcaption a la variable card. 
    card.appendChild(imageCard);//añade la variable imageCard a la variable card.
    cards.appendChild(card);//añade la variable card a la variable cards que contiene todas las otras variables.
   
     card.addEventListener('click', () => {
       showModal(valor);
 
     });
   });
 }
 loadAll(); //para llamar/ejecute a la función loadAll 

 function showModal (item) {
  window.open("#myModal","_self");
  //console.log(item);

  let characterImage = document.getElementById('photoModal');
  characterImage.src = item.image;
  let characterStatus = document.getElementById('statusModal');
  characterStatus.innerHTML = "Status: " + item.status;
  let characterSpecies= document.getElementById('speciesModal');
  characterSpecies.innerHTML = "Specie: " + item.species;
  let characterType= document.getElementById('typeModal');
  characterType.innerHTML = "Type: " + item.type;
  let characterGender= document.getElementById('genderModal');
  characterGender.innerHTML = "Gender: " + item.gender;
  let characterOrigin= document.getElementById('originModal');
  characterOrigin.innerHTML = "Origin: " + item.origin.name;
  let characterLocation= document.getElementById('locationModal');
  characterLocation.innerHTML = "Location: " + item.location.name;
  //let characterEpisode= document.getElementById('episodeModal');
  //characterEpisode.innerHTML = "Episode: " + item.episode;
  let characterName = document.getElementById('nameModal');
  characterName.innerHTML = "Name: " + item.name; // innetHTML se usa para cambiar el valor de un p.

}

