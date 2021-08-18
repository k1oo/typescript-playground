# typescript-playground

**References**

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Poiema Web](https://poiemaweb.com)
- [타입스크립트 프로그래밍](http://www.yes24.com/Product/Goods/90265564)

___

## 기존 자바스크립트의 몇 가지 문제점

자바스크립트는 모든 값에 타입이 있지만, 개발자에 의해 값의 타입이 변환될 수 있다. 개발자에 의해 의도적으로 값의 타입이 변환되는 것은 명시적 타입 변환 또는 타입 캐스팅이라 한다. 명시적 타입 변환(타입 캐스팅)

```javascript
const num = 1; // number
const str = num.toString(); // toString 메소드를 호출해 string으로 변환
console.log(str); // "1"
```

반면에 동적 타입 언어인 자바스크립트는 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 변하기도 하는데, 이를 암묵적 타입 변환 또는 강제 타입 변환이라 한다. 명시적 타입 변환(타입 캐스팅)

```javascript
const num = 1; // number
const str = num + '' // toString 메소드를 호출해 string으로 변환
console.log(typeof str, str); // string "1"
 ```

자바스크립트의 동일 연산자`(==)`는 인수를 강제로 변환하여 의도하지 않은 동작을 유발하기도 한다.

```javascript
if ('' == 0) {
	// true
}
if (1 < x < 3) {
	// x가 무슨 값이던 true
}

console.log(4 / []) // NaN
```

또한 존재하지 않는 프로퍼티에 접근이 가능하다.

```javascript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth; // NaN
```

컴파일 시점에서 발견되지 않는 이러한 문제점들은, 런타임 시점에서 직접 해당 코드가 실행된 후에야 발견할 수 있었다.

하지만 타입스크립트는 정적 타입 검사를 통해 컴파일 시점에서 오류를 지적해준다.

```typescript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth; // TS2551: Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?

console.log(4 / []) // TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

## 타입스크립트

<!-- Runtime Behavior / Erased Types 작성할 것 -->

### 타입 선언

타입스크립트는 일반 변수, 매개 변수, 객체 속성 등에 `: TYPE`의 형태로 타입을 지정할 수 있다.

```typescript
const A: TYPE =
... // A의 타입은 TYPE
```

## 목차

___

1. [기본 타입(BasicTypes)](/src/BasicTypes/README.md)
2. [인터페이스(Interface)](/src/Interface/README.md)
3. [함수(Functions)](/src/Functions/README.md)