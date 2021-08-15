/**
 * 읽기 전용 프로퍼티 (Readonly Properties)
 */
interface Square {
  readonly width: number,
  readonly height: number,
}

const square1: Square = { width: 10, height: 10 };
square1.height = 1; // compile error

const A: number[] = [1, 2, 3, 4];
A[0] = 3;
console.log(A); // [ 3, 2, 3, 4 ]

const B: ReadonlyArray<number> = [1, 2, 3, 4];
B[0] = 3; // compile error