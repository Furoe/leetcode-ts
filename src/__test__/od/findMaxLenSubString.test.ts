import { test, expect } from "vitest";
import { findMaxLengthSubString } from "@/od/findMaxLengthSubString";

test("最长的元音子串", () => {
  expect(findMaxLengthSubString("asdbuiodevauufgh")).toBe(3);
});
