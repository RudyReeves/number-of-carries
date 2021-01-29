/***
 * Problem Statement:
 * Given two numbers `n1` and `n2`, write a function that returns 
 * the number of carry operations required to add them digit-by-digit,
 * similar to pen-and-paper arithmetic with a number being carried as
 * the digits are added column-wise right-to-left.
 */

 // Here's my solution in JavaScript which is O(n):

 /***
  * `f(n1, n2)` takes two integers and returns the integer number
  * of carries required to add `n1` and `n2`.
  */
const f = (n1, n2) => {
    const digits1 = getDigits(n1).reverse();
    const digits2 = getDigits(n2).reverse();
    const maxLength = Math.max(digits1.length, digits2.length);
    const minLength = Math.min(digits1.length, digits2.length);
    let carry = 0;
    let i = 0;
    for (; i < minLength; i++) {
        const e1 = digits1[i] || 0;
        const e2 = digits2[i] || 0;
        const sum = e1 + e2;
        if (sum >= 10) {
            carry++;
        }
    }
    for (; i < maxLength; i++) {
        const e = digits1.length > digits2.length ? digits1[i] : digits2[i];
        if (e === 9) {
            carry++;
        } else {
            break;
        }
    }
    return carry;
};

const getDigits = (n) => ('' + n).split('').map(Number);

// Tests:

console.log(f(55, 49)); // pass (1)
console.log(f(50, 49)); // pass (0)
console.log(f(12345, 4)); // pass (0)
console.log(f(31, 24)); // pass (0)
console.log(f(56799, 5)); // fail (expected 2)
console.log(f(6, 99999)); // fail (expected 5)
console.log(f(66, 99999)); // fail (expteced 5)
