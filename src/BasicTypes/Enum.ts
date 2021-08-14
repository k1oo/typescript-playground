/**
 * 열거(enum) 타입
 */
enum ColorDefault {
  Red, // 0
  Green , // 1
  Blue // 2
}

const A: ColorDefault = ColorDefault.Blue;
console.log(typeof A, A); // number 2
console.log(A[2]); // Blue

enum ColorRedAs1 {
  Red = 1, // 1
  Green, // 2
  Blue // 3
}

const B: ColorRedAs1 = ColorRedAs1.Blue;
console.log(typeof B, B); // number 3
console.log(B[2]); // Green

enum ColorDefined {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

const C: ColorDefined = ColorDefined.Blue;
console.log(typeof C, C); // string Blue
console.log(C[2]); // undefined