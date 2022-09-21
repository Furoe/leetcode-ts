import { test, expect } from "vitest";
import { romanToInt } from "@/leetcode/easy/romanToInt";

test("测试罗马数字转数字", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("IV")).toBe(4);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
