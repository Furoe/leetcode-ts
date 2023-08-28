import { test, expect } from "vitest";
import { selectSort } from "@/sort/select";

test("测试选择排序", () => {
  expect(selectSort([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
