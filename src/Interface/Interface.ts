/**
 * 인터페이스 (Interface)
 */

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