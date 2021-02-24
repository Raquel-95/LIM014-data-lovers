
// Filtrado por orden A-Z/ Z-A
export const dataSort = (allCharacters, sortBy, sortOrder) => {
  //console.log("entre dibidubsdip");
  if (sortBy === "name" && sortOrder === "orderAtoZ") {
    return allCharacters.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  }
  else if (sortBy === "name" && sortOrder === "orderZtoA") {
    return allCharacters.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      else if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
  }

  else if (sortBy === "name" && sortOrder === "none") {
    return allCharacters.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      else if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
  }

};


// export const kindFeaturesFilter = (allCharacters, statusAll,filterName,arrayFiltered) => {
//   console.log("entreeee");
//     let result = [];
//     console.log(statusAll);
//     result = allCharacters;

//     arrayFiltered=result;
//     console.log(result);


//     if(filterName == "origin"){
//       console.log("entre a origin");
//       // console.log(allCharacters[0][filterName].name);
//       // console.log(statusAll);
//       result = result.filter( character=> character[filterName].name == statusAll);

//       // array.forEach(element => {

//       // });
//       // result = allCharacters[0][filterName].name;
//     }
//  else if (filterName == "episodes"){
//   console.log(epiii);
//   result.forEach(element => {
//     console.log(element[filterName]);
//   });

// }
//     else{
//       result = result.filter( character=> character[filterName] === statusAll); console.log(result);
//     }


//     // if(filterName === "episodes"){

//     // }
//  return result
// };



export const kindFeaturesFilter = (allCharacters, statusAll, filterName, arrayFiltered) => {
  console.log("entreeee");
  let result = [];
  console.log(statusAll);
  result = allCharacters;

  arrayFiltered = result;
  console.log(result);





  switch (filterName) {
    case "origin":
      console.log("entre a origin");
      // console.log(allCharacters[0][filterName].name);
      // console.log(statusAll);
      result = result.filter(character => character[filterName].name == statusAll);
      break;

    case "episodes":
      console.log("entre a epi");
      // console.log(allCharacters[0][filterName].name);
      // console.log(statusAll);
      result.forEach(element => {
        console.log(element[filterName]);
      });
      break;

    default:
      result = result.filter(character => character[filterName] === statusAll); console.log(result);
      break;
  }
  // if(filterName === "episodes"){

  // }
  return result
};