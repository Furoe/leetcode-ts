import { test, expect } from "vitest";
import { quickSort } from "@/sort/quickSort";

test("测试快速排序", () => {
  expect(quickSort([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
