import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const numMap = numbers.map(function (x) {
    return 2 * x;
});
console.log("Mapped with 2x function: ", numMap);

//Filter - Create a new array by keeping the items that return true.
const numFilter = numbers.filter(function (x) {
    return x > 10;
});
console.log("Filtered with x > 10 function: ", numFilter);

//Reduce - Accumulate a value by doing something to each item in an array.
const numReduce = numbers.reduce(function(accumulate, current) {
    console.log("Current number: ", current);
    console.log("Accumulated number: ", accumulate);
    return (accumulate + current);
});
console.log(numReduce);

//Find - find the first item that matches from an array.
const numFound = numbers.find(function (x) {
    return x > 10;
});
console.log("First number x > 10: ", numFound);

//FindIndex - find the index of the first item that matches.
const numFoundIndex = numbers.find(function (x) {
    return x = 48;
});
console.log("Index number of 48 in array: ", numFoundIndex);


// Truncuate emojipedia meaning to 100 characters.
// console.log("Emojipedia: ", emojipedia);
const emoMap = emojipedia.map(function (x) {
    return x.meaning.substring(0,100);
});
console.log("Truncated: ", emoMap);


// function createEmoji(emote) {
//     return (
//         <Entry 
//             id = {emote.id}
//             key = {emote.id}
//             emoji = {emote.emoji}
//             name = {emote.name}
//             meaning = {emote.meaning}
//         />
//     );
// }

// function createEmoji() {
//     return emojipedia.map();
// }
// console.log(createEmoji);

// console.log(emojipedia.createEmoji.meaning);

// function shortEmoji() {
//     return emojipedia.map(createEmoji);
// }
// console.log(shortEmoji);