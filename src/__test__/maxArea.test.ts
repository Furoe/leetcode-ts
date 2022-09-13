import { test, expect } from "vitest";
import { maxArea } from "@/leetcode/medium/maxArea";

test("测试盛水最多的容器", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([1, 1])).toBe(1);
});
