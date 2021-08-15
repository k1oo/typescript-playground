## 인터페이스 (Interface)

___

### 목차

1. [Interface](#Interface)

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
