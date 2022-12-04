declare global {
  function dbg<T>(arg: T): T;
}

globalThis.dbg = dbg;
export function dbg<T>(arg: T) {
  console.warn(arg);
  return arg;
}
