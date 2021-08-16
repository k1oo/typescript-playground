## 인터페이스 (Interface)

___

### 목차

1. [Interface](#Interface)
2. [Optional Properties](#Optional-Properties)
3. [Readonly Properties](#Readonly-Properties)
4. [Excess Property Checks](#Excess-Property-Checks)

___

### Interface

인터페이스는 여러 가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하며 변수, 함수, 클래스 등에 사용할 수 있다.  
타입 검사 시에는 프로퍼티의 순서를 요구하지 않으며, 인터페이스가 요구하는 프로퍼티가 존재하는지와 해당 프로퍼티의 타입이 일치하는지만을 확인한다.

```typescript
const labelObj = { label: 'string' };

/** 인터페이스를 사용하지 않은 코드 */
function A(labelObj: { label: string }) {
  console.log(labelObj.label);
}

A(labelObj); // string

/** 인터페이스 사용한 코드 */
interface LabelObject {
  label: string;
}

function B(labelObj: LabelObject) {
  console.log(labelObj.label);
}

B(labelObj); // string
```

### Optional Properties

때때로 인터페이스의 모든 값이 필요하지 않을 경우가 발생하고 그럴 때 사용된다.  
일반적인 인터페이스를 만들 때와의 형태과 비슷하지만, 선택적 프로퍼티는 프로퍼티 이름 끝에 `?`를 붙여 표시한다.

```typescript
interface CharacterConfig {
  name?: string,
  age?: number
}

function createCharacter(config: CharacterConfig): { name: string, age: number } {
  const newCharacter = { name: 'DEFAULT_NAME', age: 20 };
  if (config.name) {
    newCharacter.name = config.name;
  }
  if (config.age) {
    newCharacter.age = config.age;
  }
  return newCharacter;
}

const A = createCharacter({ name: 'k1oo' });
console.log(A); // { name: 'k1oo', age: 20 }
```

### Readonly Properties

때때로 인터페이스의 프로퍼티들이 수정되지 않아야 할 경우에 사용되며, 프로퍼티 이름 앞에 `readonly` 키워드를 붙여 사용할 수 있다.  
일부에만 적용할 수도 있으며, 모든 프로퍼티에 대해 적용할 수 있다.  
배열의 경우에는 `ReadonlyArray<T>`타입을 사용하여 값이 변경되지 않는 배열을 제공한다.

```typescript
interface Square {
  readonly width: number,
  readonly height: number,
}

const square1: Square = { width: 10, height: 10 };
square1.height = 1; // compile error

const A: number[] = [1, 2, 3, 4];
A[0] = 3;
console.log(A); // [ 3, 2, 3, 4 ]

const B: ReadonlyArray<number> = [1, 2, 3, 4];
B[0] = 3; // compile error
```

`readonly`와 `const` 중 어떤 것이 적절한지를 판단하기 좋은 방법은 변수와 프로퍼티 중 어느 곳에 사용할 지 확인해보는 것이다.  
변수에는 `const`, 프로퍼티에는 `readonly` 사용한다.

### Excess Property Checks

인터페이스를 사용하여 매개변수 등의 타입을 지정할 때, 인터페이스에 해당하지 않는 프로퍼티가 존재할 경우 에러를 컴파일 에러를 발생시킨다.  
이 검사를 피하는 방법은 `타입 단언`을 사용하는 것이다. 타입 단언을 사용하면 간단하게 이 검사를 피할 수 있다.  
하지만 특별한 경우에, 추가 프로퍼티가 있음을 확신한다면, `문자열 인덱스 서명`을 추가하는 것도 고려해봐야 한다.  
`문자열 인덱스 서명`을 추가하면 해당 프로퍼티와 일치하는 타입의 프로퍼티를 추가로 전달할 수 있다.

```typescript
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
```

### Function Types

인터페이스로 함수 타입 또한 지정할 수 있으며, 매개변수의 타입과 반환 타입이 모두 필요하다. 한 번 정의된 함수 타입 인터페이스는 다른 인터페이스들처럼 사용할 수 있다.  
함수 인터페이스를 사용하더라도, 해당 인터페이스에 정의된 매개변수의 이름과 같아야 할 필요는 없다.  
또한 타입을 지정해주지 않더라도, 타입스크립트의 `문맥상 타이핑`이 인수 타입을 추론할 수 있다.  
함수의 반환 타입이 인터페이스에 정의된 반환 타입과 다르다면, 컴파일 에러를 발생시킨다.

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc;
search = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

let search2: SearchFunc;
search2 = function (src, sub) {
  // return 'string' // compile error
  return search(src, sub);
};
```