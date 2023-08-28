import { test, expect } from "vitest";
import { count } from "@/sort/count";

test("测试计数排序", () => {
  expect(count([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
