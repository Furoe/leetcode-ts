import { test, expect } from "vitest";
import { heapSort } from "@/sort/heapSort";

test("测试堆排序", () => {
  expect(heapSort([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
