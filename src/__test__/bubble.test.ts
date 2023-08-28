import { test, expect } from "vitest";
import { bubble } from "@/sort/bubble";

test("测试冒泡排序", () => {
  expect(bubble([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
