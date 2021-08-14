## 기본 타입(Basic Types)

___

### 목차

1. [Boolean](#Boolean)
2. [Number](#Number)
3. [String](#String)
4. [Array](#Array)
5. [Tuple](#Tuple)
6. [Enum](#Enum)
7. [Any](#Any)

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

### Array

배열 타입은 특정 타입의 데이터만 담는 배열 선언이 가능하며, [any](#Any) 타입이나 ```OR(|)``` 연산자 등을 사용하여 여러 타입의 데이터를 담을 수도 있다.  
배열 타입은 `: TYPE[]`이나 제너릭을 사용한 `: Array<TYPE>`으로 지정할 수 있다.

```typescript
const A: boolean[] = [false, true];
const B: number[] = [1, 2, 3];
const C: Array<string> = ['kimchi', 'rice'];
const D: Array<string | boolean> = [];
const E: any[] = [false, 1, 2, 'kimchi'];

// A.push(123); // compile error
// D.push(123); // compile error
D.push(true);
D.push('kimchi');
E.push(123);

console.log(typeof A, A); // object [ false, true ]
console.log(typeof B, B); // object [ 1, 2, 3 ]
console.log(typeof C, C); // object [ 'kimchi', 'rice' ]
console.log(typeof D, D); // object [ true, 'kimchi' ]
console.log(typeof E, E); // object [ false, 1, 2, 'kimchi', 123 ]
```

### Tuple

튜플 타입은 요소의 타입과 갯수가 고정된 배열을 표현하며, 각 요소는 타입이 다를 수 있다.  
정해진 인덱스에 위치한 요소에 접근하면 해당 타입을 나타내며, 정해지지 않은 인덱스에 접근 시에는 컴파일 에러가 발생한다.

```typescript
let A: [string, number];
A = ['a', 1];
// A = [1, 'a'] // compile error

A[0].toLowerCase();
// A[1].toLowerCase(); // compile error. A[1]은 number 타입.

// A[2] = '123'; // compile error. 정해지지 않은 인덱스 접근
```

### Enum

열거 타입을 사용하면 개발자가 명명된 상수 집합을 정의할 수 있으며, 의도를 문서화하거나 별개의 사례 집합을 더 쉽게 만들 수 있다.  
기본적으로 값을 지정해주지 않는 경우 0부터 시작하여 각 멤버마다 번호를 매긴다. 모든 값은 수동으로 설정이 가능하며, 첫 번째 혹은 중간 멤버의 번호가 변경될 경우 변경된 번호부터 다시 차례대로 증가한다.  
또한 멤버에 매겨진 번호를 통해 접근하면, 해당 번호에 해당하는 멤버의 이름을 알아낼 수 있다.

```typescript
enum ColorDefault {
  Red, // 0
  Green, // 1
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
```

### Any
`any`타입은 코드를 작성하며 알지 못하는 타입을 표현할 때 사용할 수 있으며, 컴파일 중에 점진적으로 타입 검사를 진행하거나, 아예 검사를 하지 않을 수 있다.  
예를 들어 사용자로부터 받은 데이터나 서드 파티 라이브러리 등을 사용해 받은 값의 타입을 검사하지 않고, 컴파일 타임에 통과시킬 수 있다.
```typescript
let A: any;
A = 'string';
console.log(typeof A, A); // string string

A = 4;
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // number 4

A = true;
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // boolean true

A = [1, 2, 'string'];
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // object [ 1, 2, 'string' ]

A = { number: 1, string: 'string' };
A.toLowerCase(); // not compile error, runtime error
console.log(typeof A, A); // object { number: 1, string: 'string' }
```