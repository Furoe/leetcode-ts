import { expect, test } from "vitest";
import { shellSort } from "@/sort/shellSort";

test("测试希尔排序", () => {
  expect(shellSort([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
