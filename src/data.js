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
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//BUSCADOR

const searchNames= document.querySelector('#searchByName');
// Al dar click a las teclas empieza la busqueda 
searchNames.addEventListener('keyup', function (event) {
  const inputName = event.target.value; 
  //comprobación xd
    console.log(inputName);
});



