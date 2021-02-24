
// Filtrado por orden A-Z/ Z-A
export const dataSort = (allCharacters, sortBy, sortOrder) => {
  //console.log("entre dibidubsdip");
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
