interface StringArray {
  [index: number]: string;
}

let stringArray: StringArray;
stringArray = ['Apple', 'Banana'];


interface NumberDictionary {
  [index: string]: number;

  length: number;
  name: string; // compile error
}

interface NumberOrStringDictionary {
  [index: string]: number | string;

  length: number;
  name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let array: ReadonlyStringArray = ['Apple', 'Banana'];
array[2] = 'Cherry'; // compile error