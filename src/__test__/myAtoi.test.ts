import { test, expect } from "vitest";
import { myAtoi } from "@/leetcode/medium/myAtoi";

test("测试字符串转数字", () => {
  expect(myAtoi("42")).toBe(42);
  expect(myAtoi("   -42")).toBe(-42);
  expect(myAtoi("4193 with words")).toBe(4193);
});
