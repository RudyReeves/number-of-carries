/***
 * Problem Statement:
 * Given two numbers `n1` and `n2`, write a function that returns 
 * the number of carry operations required to add them digit-by-digit,
 * similar to pen-and-paper arithmetic with a `1` being carried as
 * the digits are added column-wise right-to-left, like this:
 * 
 *      49
 *    + 55
 *    ----
 *     104
 * 
 * The right-most column is 9+5=14, which is two digits,
 *      so we carry the `1` and write `4`. That's a carry operation.
 * 
 * The left-most column is 4+5=9, but we add the carried `1`,
 *      so we write `10` before `4`.
 * 
 * In the end, we wrote `104`, and a single carry operation happened,
 *      so `f(49, 55)` is `1`.
 * 
 * More tests are below.
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
        if (e1 + e2 >= 10) { // Check if this pair sums to two digits
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
console.log(f(56799, 5)); // pass (2)
console.log(f(6, 99999)); // pass (5)
console.log(f(66, 99999)); // pass (5)
