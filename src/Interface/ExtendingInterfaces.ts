/**
 * 인터페이스 확장하기 (Extending Interfaces)
 */
interface Shape {
  color: string,
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = { color: 'red', sideLength: 10 };

interface PenStroke {
  penWidth: number;
}

interface Square2 extends Shape, PenStroke {
  sideLength: number;
}

const square2: Square2 = { color: 'red', sideLength: 10, penWidth: 2 };