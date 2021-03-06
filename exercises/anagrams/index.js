// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
 const aCharMap = makeCharMap(stringA);
 const bCharMap = makeCharMap(stringB);

 //look at the number of keys and count them

 if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
     return false;
 }
 //iterate over object
 for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char]){
        return false;
    }
 }
 return true;
}

function makeCharMap(str) {
    const charMap = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;
