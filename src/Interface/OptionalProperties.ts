/**
 * 선택적 프로퍼티 (Optional Properties)
 */
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