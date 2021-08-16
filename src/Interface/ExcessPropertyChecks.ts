/**
 * 타입 초과 검사 (Excess Property Checks)
 */
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(square: SquareConfig) {
  const newSquare = { color: 'white', width: 10 };
  if (square.color) {
    newSquare.color = square.color;
  }
  if (square.width) {
    newSquare.width = square.width;
  }

  return newSquare;
}

const square1 = createSquare({ color: 'red', width: 20, opacity: 0.5 }); // compile error
const square2 = createSquare({ color: 'red', width: 20, opacity: 0.5 } as SquareConfig);

interface SquareConfig2 {
  color?: string;
  width?: number;

  [propName: string]: any;
}

function createSquare2(square: SquareConfig2) {
  const newSquare = { color: 'white', width: 10 };
  if (square.color) {
    newSquare.color = square.color;
  }
  if (square.width) {
    newSquare.width = square.width;
  }

  return newSquare;
}

const square3 = createSquare2({ color: 'red', width: 10, opacity: 0.5 });