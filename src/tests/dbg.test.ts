import { assertEquals } from "../../deps.test.ts";
import {} from "../std/utils.ts";

Deno.test("dbg", () => {
  //NOTE: how do I test stderr ?
  assertEquals(dbg(4), 4);
});
