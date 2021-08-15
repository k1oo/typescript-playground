## 인터페이스 (Interface)

___

### 목차

1. [Interface](#Interface)
2. [Optional Properties](#Optional-Properties)
3. [Readonly Properties](#Readonly-Properties)

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