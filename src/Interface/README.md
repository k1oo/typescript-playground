## 인터페이스 (Interface)

___

### 목차

1. [Interface](#Interface)
2. [Optional Properties](#Optional-Properties)

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