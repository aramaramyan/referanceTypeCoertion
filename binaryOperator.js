"use strict";

// Please try to guess, test, and then understand following examples:

// binary + operator

console.log(null + undefined);    // NaN (0 + NaN = NaN)
console.log(null + true);         // 1 (0 + 1 = 1)
console.log(null + false);        // 0 (0 + 0 = 0)
console.log(null + 3);            // 3 (0 + 3 = 3)
console.log(null + NaN);          // NaN (0 + NaN)
console.log(null + 'hello');      // nullhello ("null" + "hello" = "nullhello")
console.log(undefined + true);    // NaN (NaN + 1 = NaN)
console.log(undefined + false);   // NaN (NaN + 0 = NaN)
console.log(undefined + 5);       // NaN (NaN + 5 = NaN)
console.log(undefined + NaN);     // NaN (NaN + NaN = NaN)
console.log(undefined + 'hello'); // undefinedhello ("undefined" + "hello" = "undefinedhello")
console.log(true + false);        // 1 (1 + 0)
console.log(true + 2);            // 3 (1 + 2)
console.log(true + NaN);          // NaN (Any operation with "NaN" returns "NaN")
console.log(true + 'hello');      // truehello ("ture" + "hello")
console.log(false + 4);           // 4 (0 + 4 = 4)
console.log(false + NaN);         // NaN ("false" + "NaN")
console.log(false + 'hello');     // falsehello ("false" + "hello")
console.log(5 + 3);               // 8 (5 + 3 = 8)
console.log(5 + NaN);             // NaN (Any operation with "NaN" returns "NaN")
console.log(5 + 'hello');         // 5hello ("5" + "hello")
console.log('hello' + NaN);       // helloNaN ("hello" + NsN)