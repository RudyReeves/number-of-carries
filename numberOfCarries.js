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

 // Helper functions:

 const indexes = arr => arr.map((_, i) => i);

 const getDigits = n => n.toString().split('').map(Number);

 const getArithmeticRows = (n1, n2) =>
    [n1, n2].map(n => getDigits(n).reverse());

 /***
  * `f(n1, n2)` takes two integers and returns the integer number
  * of carries required to add `n1` and `n2`.
  */
 const numberOfCarryOperations = (n1, n2) => {
    const rows = getArithmeticRows(n1, n2), [row1, row2] = rows;
    return ((row1.length > row2.length)
        ? indexes(row1) : indexes(row2))
        .reduce((partialCarry, _, i) => {
            const [d1, d2] = rows.map(row => row[i] || 0);
            return partialCarry + (
                ((d1 + d2 >= 10)
                || (d1 === 9 && partialCarry !== 0)
                || (d2 === 9 && partialCarry !== 0))
                ? 1 : 0
            );
        }, 0);
};

// Tests:

console.log(numberOfCarryOperations(44, 56)); // pass (1)
console.log(numberOfCarryOperations(9999, 1)); // pass (4)
console.log(numberOfCarryOperations(1, 9999)); // pass (4)
console.log(numberOfCarryOperations(55, 49)); // pass (1)
console.log(numberOfCarryOperations(50, 49)); // pass (0)
console.log(numberOfCarryOperations(12345, 4)); // pass (0)
console.log(numberOfCarryOperations(31, 24)); // pass (0)
console.log(numberOfCarryOperations(56799, 5)); // pass (2)
console.log(numberOfCarryOperations(6, 99999)); // pass (5)
console.log(numberOfCarryOperations(66, 99999)); // pass (5)
