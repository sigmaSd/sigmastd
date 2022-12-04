import { assertEquals } from "./deps.test.ts";
import {} from "../std/pipe.ts";

Deno.test("pipe", () => {
  const add1 = (a: number) => a + 1;
  assertEquals(add1(1).pipe((r) => add1(r)), 3);
});
