/**
 * void 타입
 */
function F(): void {
  console.log('return void');
}

let result: void = F();
result = undefined;
result = null;
// result = 'success'; // compile error
