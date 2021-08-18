## 함수 (Functions)

___

### 목차

1. [Function Types](#Function-Types)

___

### Function Types
타입스크립트의 함수에는 매개변수의 타입과 반환 타입을 지정할 수 있다.

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x: number, y: number) => x + y;
```