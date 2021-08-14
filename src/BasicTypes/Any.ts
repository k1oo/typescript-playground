/**
 * any 타입
 */
let A: any;
A = 'string';
console.log(typeof A, A); // string string

A = 4;
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // number 4

A = true;
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // boolean true

A = [1, 2, 'string'];
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // object [ 1, 2, 'string' ]

A = { number: 1, string: 'string' };
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // object { number: 1, string: 'string' }
