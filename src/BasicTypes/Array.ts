/**
 * 배열(Array) 타입
 */
const A: boolean[] = [false, true];
const B: number[] = [1, 2, 3];
const C: Array<string> = ['kimchi', 'rice'];
const D: Array<string | boolean> = [];
const E: any[] = [false, 1, 2, 'kimchi'];

// A.push(123); // compile error
// D.push(123); // compile error
D.push(true);
D.push('kimchi');
E.push(123);

console.log(typeof A, A); // object [ false, true ]
console.log(typeof B, B); // object [ 1, 2, 3 ]
console.log(typeof C, C); // object [ 'kimchi', 'rice' ]
console.log(typeof D, D); // object [ true, 'kimchi' ]
console.log(typeof E, E); // object [ false, 1, 2, 'kimchi', 123 ]
