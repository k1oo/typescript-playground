/**
 * 함수 타입 (Function Types)
 */
function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x: number, y: number) => x + y;