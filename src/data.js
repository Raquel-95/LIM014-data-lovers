// // estas funciones son de ejemplo
// import data from './data/rickandmorty/rickandmorty.js';

// export const example = () => {
//   data.results.forEach(function(valor, indice, array){
//   console.log(valor.origin.name)
//   });
 
//   return 'example';
// };

// export const anotherExample = () => {

//   return 'OMG';
// };




// Importa el elemento por defecto de file.js en FullData.
import fullData from './data/rickandmorty/rickandmorty.js';
// Existen varias formas de exportar elementos. La más habitual, quizás, es la de simplemente añadir la palabra clave export a la izquierda de la declaración del elemento Javascript que deseamos exportar, ya sea una variable, una constante, una función, una clase u otro objeto más complejo:
export const everithingData = fullData;

// estas funciones son de ejemplo
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

//BUSCADOR
//funcion que busca personajes//
export const searchCharacters=(array,string)=>{
  const arrOfSearch=[...array];
  const newArraOfSearch= arrOfSearch.filter((obj)=>obj.name.indexOf(string[0].toUpperCase()+string.slice(1).toLowerCase())>-1);
  return newArraOfSearch;
}

//funcion que filtra personajes de a-z//
export const orderByName=(array,string1)=>{
  const arrayData = [...array];
  const newArray = arrayData.map((obj)=>obj.name).sort().map((string2)=> arrayData.find((obj)=>obj.name===string2));
  if (string1== 'A-Z'){
    return newArray;
  }

}





