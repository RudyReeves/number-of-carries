/***
 * Problem Statement:
 * Given two numbers `n1` and `n2`, write a return the number of carry
 * operations required to add them digit-by-digit, i.e. column-wise,
 * similar to pen-and-paper arithmetic with a number being carried.
 */

 // Here's my solution in JavaScript which is O(n):

 /***
  * `f(n1, n2)` takes two integers and returns the integer number
  * of carries required to add `n1` and `n2`.
  */
const f = (n1, n2) => {
    const digits1 = getDigits(n1).reverse();
    const digits2 = getDigits(n2).reverse();
    const minLength = Math.min(digits1.length, digits2.length);
    let carry = 0;
    for (let i = 0; i < minLength; i++) {
        const e1 = digits1[i];
        const e2 = digits2[i];
        const sum = e1 + e2;
        if (sum >= 10) {
            carry++;
        }
    }
    return carry;
};

const getDigits = (n) => ('' + n).split('').map(Number);

// Tests:

console.log(f(55, 49)); // pass (1)
console.log(f(50, 49)); // pass (0)
console.log(f(12345, 4)); // pass (0)
console.log(f(6, 99999)); // pass (1)
console.log(f(31, 24)); // pass (0)
