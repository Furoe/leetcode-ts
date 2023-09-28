import { test, expect } from "vitest";
import { intervalOverlap } from "@/od/intervalOverlap";

test("测试区间交叠", () => {
  expect(
    intervalOverlap(3, [
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  ).toBe(2);
  expect(
    intervalOverlap(7, [
      [2, 6],
      [1, 4],
      [3, 6],
      [3, 7],
      [6, 8],
      [2, 4],
      [3, 5],
    ])
  ).toBe(3);
});
