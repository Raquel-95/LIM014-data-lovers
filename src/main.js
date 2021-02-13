// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// //import data from './data/pokemon/pokemon.js';
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

