import { assert, assertEquals } from "./deps.test.ts";
import {} from "../std/string.ts";

Deno.test("string: pathExists", () => {
  assert(Deno.makeTempDirSync().pathExists());
  assert(!"".pathExists());
});
Deno.test("string: splitWhiteSpace", () => {
  assertEquals("hello world".splitWhiteSpace(), ["hello", "world"]);
});
Deno.test("string: lines", () => {
  assertEquals("hello\nworld".lines(), ["hello", "world"]);
});
