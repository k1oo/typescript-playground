/**
 * 튜플(tuple) 타입
 */
let A: [string, number];
A = ['a', 1];
// A = [1, 'a'] // compile error

A[0].toLowerCase();
// A[1].toLowerCase(); // compile error

// A[2] = '123'; // compile error