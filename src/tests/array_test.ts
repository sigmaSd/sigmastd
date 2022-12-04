import {} from "../std/array.ts";
import { assertEquals } from "./deps.test.ts";

Deno.test("array: parallelMap", async () => {
  assertEquals(
    // deno-lint-ignore require-await
    await ["a", "b", "c"].parallelMap(async (e) => e + "1"),
    ["a1", "b1", "c1"],
  );
  assertEquals(
    // deno-lint-ignore require-await
    await [1, 2, 3].parallelMap(async function (this: number) {
      return this;
    }, 2),
    [2, 2, 2],
  );
});

Deno.test("array: split", () => {
  assertEquals(
    ["a", "b", "c"].split((b) => b === "b"),
    [["a"], ["c"]],
  );
  assertEquals(
    ["a", "c"].split((b) => b === "b"),
    [["a", "c"]],
  );
  assertEquals(
    [].split((b) => b === "b"),
    [[]],
  );
});

Deno.test("array: filterMap", () => {
  assertEquals(
    ["a", "b", "c"].filterMap((b) => b === "b" ? "hello" : null),
    ["hello"],
  );
  assertEquals(
    ["a", "c"].filterMap((b) => b === "b" ? "hello" : null),
    [],
  );
});
