import { test, expect } from "vitest";
import { topIncome } from "@/od/topIncome";

test("金字塔形收入", () => {
  expect(
    topIncome([
      [1, 0, 223],
      [2, 0, 323],
      [3, 2, 1203],
    ])
  ).toBe(105);
  expect(
    topIncome([
      [1, 0, 100],
      [2, 0, 200],
      [3, 0, 300],
      [4, 0, 200],
    ])
  ).toBe(120);
});
