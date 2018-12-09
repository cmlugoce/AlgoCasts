// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   return str.toLowerCase().split(' ')
    .map((s)=> s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

module.exports = capitalize;


//.charAt() -> The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
 /* pseudocode
 lowercase words, convert string into array
 map through them usinng charAt, the first letter of everyword capitalize and then slice and join"*/


 //Another solution

//  function cap(string){
//     return string.toLowerCase().split(' ').map((char) => char[0].toUpperCase() + char.slice(1)).join(' ');
//     //console.log(string)
    
//   }

// solution # 3
// function cap(string){
//  words = [];

//  for(let word in string.split(" ")){
//      words.push(word[0].toUpperCase() + word.slice(1))
//  }
//     return words.join(' ');
//   }