function A(message): never {
  throw new Error(message);
}

function fail() {
  return A('return never');
}

fail();
