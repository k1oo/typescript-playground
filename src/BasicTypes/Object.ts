/**
 * object 타입
 */
declare function create(o: object | null): void;

create({ prop: 0 });
create([1, 2, 3]);
create(null);

create(42); // compile error
create('string'); // compile error
create(false); // compile error