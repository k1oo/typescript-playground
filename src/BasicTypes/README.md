## 기본 타입(Basic Types)

___

### 목차

1. [Boolean](#Boolean)
2. [Number](#Number)
3. [String](#String)

___

### Boolean

가장 기본적인 타입으로, 참 / 거짓 (true / false)이 이에 해당한다.

````typescript
const A: boolean = true;
const B: boolean = false;
const C: boolean = 1; // TS2322: Type 'number' is not assignable to type 'boolean'.
````

### Number

자바스크립트와 동일하게 타입스크립트의 모든 숫자는 부동 소수 값이며, 부동 소수에는 number라는 타입을 사용한다.  
16진수, 10진수, 8진수, 2진수, 소수 등이 이에 해당한다.

```typescript
const A: number = 0;
const B: number = 1.2;
const C: number = 0xffff;
const D: number = 0b1010;
const E: number = 0o744;

console.log(typeof A, A); // number 0
console.log(typeof B, B); // number 1.2
console.log(typeof C, C); // number 65535
console.log(typeof D, D); // number 10
console.log(typeof E, E); // number 484
```

### String

텍스트 데이터 타입으로, 자바스크립트와 동일하게 쌍따옴표(`"..."`)나 따옴표(`'...'`)로 감싼 문자열 데이터가 이에 해당한다.  
또한 백틱(`` `...` ``)을 이용해 감싼 템플릿 리터럴도 이에 해당한다.

```typescript
const A: string = 'apple';
const B: string = 'banana';
const C: string = `cherry`;
const D: string = `This is ${B}`;
const E: string = `This is ${B + ' juice'}`;

console.log(typeof A, A); // string apple
console.log(typeof B, B); // string banana
console.log(typeof C, C); // string cherry
console.log(typeof D, D); // string This is banana
console.log(typeof E, E); // string This is banana juice
```