import { assertEquals, assertType, IsExact } from "./deps.test.ts";
import {} from "../std/pipe.ts";

Deno.test("pipe", () => {
  const result = { foo: 3 }.pipe((j) => j.foo);
  assertType<IsExact<typeof result, number>>(true);

  const add1 = (a: number) => a + 1;
  assertEquals(add1(1).pipe((r) => add1(r)), 3);
});
