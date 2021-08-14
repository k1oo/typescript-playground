## 기본 타입(Basic Types)

___

### 목차

1. [Any](#Any)
2. [Unknown](#Unknown)
3. [Boolean](#Boolean)
4. [Number](#Number)
3. [String](#String)
4. [Array](#Array)
5. [Tuple](#Tuple)
6. [Enum](#Enum)
8. [Void](#Void)
9. [NullAndUndefined](#null-undefined)

___

### Any

`any`타입은 코드를 작성하며 알지 못하는 타입을 표현할 때 사용할 수 있으며, 컴파일 중에 점진적으로 타입 검사를 진행하거나, 아예 검사를 하지 않을 수 있다.  
하지만 모든 값의 집합이므로 모든 것을 할 수 있기 때문에, 의도하지 않은 로직이 동작될 수 있다. 따라서 꼭 필요한 상황이 아니라면 사용하지 않는 것이 좋다.  
타입을 미리 알 수 없는 값에는 되도록이면 [unknown](#Unknown) 타입을 사용하도록 한다.

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

### Unknown

`unknown`타입은 타입을 미리 알 수 없는 값에 사용되며, `any`타입처럼 모든 값에 사용될 수 있다.  
하지만 타입스크립트가 `unknown`의 타입을 검사해 정제하기 전까지는 사용할 수 없도록 강제한다.

```typescript
const A: unknown = 30;
const B = A === 123; // false (boolean)
const C = A + 10; // compile error (정제되지 않았음)
if (typeof A === 'number') {
  console.log(A + 10) // 40 (number)
}
```

### Boolean

`boolean`타입은 `true(참)`, `false(거짓)` 두 개의 값을 가지며, 비교 연산과 반전 연산을 할 수 있다.

````typescript
const A = true; // boolean
const B = false; // boolean
const C: true = true; // true
const D: false = true; // compile error
const E: boolean = 1; // TS2322: Type 'number' is not assignable to type 'boolean'.
````

### Number

`number`타입은 모든 숫자(정수, 소수, 양수, 음수, Infinity, NaN 등)의 집합이며, 시착연산과 비교 등 숫자 관련 연산을 수행할 수 있다.

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

배열 타입은 특정 타입의 데이터만 담는 배열 선언이 가능하며, [any](#Any) 타입이나 `유니언 타입` 등을 사용하여 여러 타입의 데이터를 담을 수도 있다.  
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

`enum` 타입을 사용하면 개발자가 명명된 상수 집합을 정의할 수 있으며, 의도를 문서화하거나 별개의 사례 집합을 더 쉽게 만들 수 있다.  
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

### Void

`void`는 어떤 타입도 존재할 수 없음을 나타내며, 보통 함수의 반환값이 없을 때 반환 타입으로 사용한다.  
`void`타입에는 `null(--strictNullCheck를 사용하지 않는 경우)` 혹은 `undefined`만 할당할 수 있기 때문에 변수의 타입으로 사용하는 것은 유용하지 못하다.

```typescript
function F(): void {
  console.log('return void');
}

let result: void = F();
result = undefined;
result = null;
// result = 'success'; // compile error
```

### Null,&#32;Undefined

`null` 타입과 `undefined` 타입은 각각 자신만을 할당할 수 있다.

```typescript
const A: undefined = undefined;
const B: null = null;
```