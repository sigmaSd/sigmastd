declare global {
  interface Object {
    pipe<T, U>(this: T, fn: (me: T) => U): U;
  }
}

Object.prototype.pipe = function <T, U>(this: T, fn: (me: T) => U) {
  return fn(this);
};
