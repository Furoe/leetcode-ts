import { test, expect } from "vitest";
import { mergeSort } from "@/sort/merge";

test("测试归并排序", () => {
  expect(mergeSort([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
