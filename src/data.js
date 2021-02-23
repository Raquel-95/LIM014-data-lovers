
// Filtrado por orden A-Z/ Z-A
export const dataSort = (allCharacters, sortBy, sortOrder) => {
  console.log("entre dibidubsdip");
  if (sortBy === "name" && sortOrder === "orderAtoZ"){
    return allCharacters.sort((a, b)=> { 
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
        return 0;
    })
  }
  else if (sortBy === "name" && sortOrder === "orderZtoA"){
   return allCharacters.sort((a, b)=> {
      if (a.name < b.name) {
        return 1;
      }
      else if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
  }

  else if (sortBy === "name" && sortOrder === "none"){
    return allCharacters.sort((a, b)=> {
      if (a.id> b.id) {
        return 1;
      }
      else if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
  }

};


export const statusData = (allCharacters, statusAll) => {
  console.log("entreeee");
   let result = [];
  // for (let i = 0; i < allCharacters.length; i++){
  // console.log(statusAll);
  //     if(allCharacters[i].status === statusAll){
  //       console.log(allCharacters[i].status);

  //       result.push(allCharacters[i])
  //     }

  //     console.log(result);

  // }
console.log(statusAll);
  // if(statusAll === "--Select--"){
   //funcion anonima
     // result = allCharacters;

  //   console.log(result);
  
  // }
  // else{
    //  result = allCharacters.filter( character=> character.status ===statusAll);
    allCharacters = allCharacters.filter( character=> character.status ===statusAll);
     console.log(result);
  // }

  // return result
  return allCharacters


};

