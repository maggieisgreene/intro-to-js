console.log('Arrays');

// Challenge 1
// Write a function that takes an array and an index and prints out that value

const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
}

const myArray = ["bee", 1, 2, 'last', 'first'];

indexAndPrint(myArray, 2);

indexAndPrint(myArray, 0);

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const findGreg = (arr) => {
    const doesIncludeGreg = arr.includes('Greg');
    if (doesIncludeGreg) {
        return('Greg found');
    } else {
        return('Greg not found');
    }
};

const myNewArray = ['Greg', 'Sally', 'Paul', 'Maggie'];

const myNewestArray = ['Elle', 'Zoe', 'Mitch', 'Chandra']

console.log(findGreg(myNewArray));
console.log(findGreg(myNewestArray));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItPadindrome = (str) => {
    const opposite = str.split('').reverse().join('');
    if (str === opposite) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isItPadindrome('Hello');
isItPadindrome('racecar');
isItPadindrome('mom');