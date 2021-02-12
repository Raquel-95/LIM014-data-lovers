// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// //import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example());


import { everithingData } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


//console.log(everithingData, data);



// import { allCharacters, filterBySpecies, filterByStatus, filterByGender, getSpeciesArray, getStatusArray, getGenderArray, order } from './data.js'


function crear_episodios (){
  let episodios = document.getElementById("episodios");
  for (let i = 1; i<=493; i++) {
    let option = document.createElement("option");//1° crear elemento de tipo option.
    let textnode = document.createTextNode(i);// 2° crear elemento de tipo texto.
    option.appendChild(textnode); //3° agrega el elemnto de texto dentro de elemento option.
    episodios.appendChild(option); //4° agrega elemento option dentro de elemento select. 
  }
}
crear_episodios();


function loadAll (){ //función para cargar/mostrar las tarjetas.
 let cards = document.getElementById("cards"); // vincula el elemento con id "cards" que es un article a la variable cards.
 cards.innerHTML=''; // para poder borrar el contenido de cards.

 data.results.forEach(function(valor, indice, array){ //forEach sirve para recorrer los elementos de la lista results que está dentro de data. Dentro de forEach debe haber una función con parámetros valor, indice y array.
  
   let card = document.createElement("figure"); //1° crear un elemento en html de tipo figure.
   
   let imageCard = document.createElement("img");//2° crear un elemento en html de tipo img.
   let nameCard = document.createElement("figcaption"); //3°crear un elemento en html de tipo figcaption.
 
   let textnode = document.createTextNode(valor.name); //4°crear nodo de texto con el contenido del nombre del personaje.

   imageCard.src = valor.image; //5° cambia la propiedad src de elemento de imagen "img".

   nameCard.appendChild(textnode);//añade la variable textnode que contiene el texto con el nombre a la variable nameCard.
   card.appendChild(nameCard);//añade la variable nameCard que contiene figcaption a la variable card. 
   card.appendChild(imageCard);//añade la variable imageCard a la variable card.
   cards.appendChild(card);//añade la variable card a la variable cards que contiene todas las otras variables.
  });
}
loadAll(); //para llamar/ejecute a la función loadAll 

