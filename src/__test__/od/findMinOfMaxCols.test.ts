import { test, expect } from "vitest";
import { findMinOfMaxCols } from "@/od/findMinOfMaxCols";

test("n*m矩阵每列最大值中的最小值", () => {
  expect(
    findMinOfMaxCols([
      [1, 2],
      [3, 4],
    ])
  ).toBe(3);
});
