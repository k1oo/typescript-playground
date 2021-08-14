/**
 * 타입 단언(Type Assertion)
 */
const A: any = 'string';

console.log((<string>A).length); // 6
console.log((A as string).length); // 6