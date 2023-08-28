import { test, expect } from "vitest";
import { insert } from "@/sort/insert";

test("测试插入排序", () => {
  expect(insert([3, 5, 1, 2, 45, 6])).toEqual([1, 2, 3, 5, 6, 45]);
});
