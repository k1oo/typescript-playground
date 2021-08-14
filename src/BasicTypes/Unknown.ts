/**
 * unknown 타입
 */
const A: unknown = 30;
const B = A === 123; // false (boolean)
// const C = A + 10; // compile error (정제되지 않았음)
if (typeof A === 'number') {
  console.log(A + 10) // 40 (number)
}