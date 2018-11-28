// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var num=0;
    while(n>0 || n<0){
        num=num*10+(n%10);
        n=parseInt(n/10);
    }
    return num;
}

module.exports = reverseInt;

// return parseInt(n.toString().split('').reverse().join(''))*Math.sign(n);
