##기본 타입(Basic Types)
___
1. [Boolean](##Boolean)

### Boolean
자바스크립트와 타입스크립트에서 가장 기본적인 타입으로, 참 / 거짓 (true / false)이 이에 해당한다.
````typescript
const A: boolean = true;
const B: boolean = false;
const C: boolean = 1; // TS2322: Type 'number' is not assignable to type 'boolean'.
````