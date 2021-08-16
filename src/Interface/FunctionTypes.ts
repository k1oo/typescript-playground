/**
 * 함수 타입 (Function Types)
 */
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