import { test, expect } from "vitest";
import { intToRoman } from "@/leetcode/medium/intToRoman";

test("测试整数转罗马数", () => {
  expect(intToRoman(3)).toBe("III");
  expect(intToRoman(4)).toBe("IV");
  expect(intToRoman(9)).toBe("IX");
  expect(intToRoman(58)).toBe("LVIII");
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
