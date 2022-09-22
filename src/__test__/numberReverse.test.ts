import { expect, test } from "vitest";
import { numberReverse } from "@/leetcode/medium/numberReverse";

test("测试整数反转", () => {
  expect(numberReverse(123)).toBe(321);
  expect(numberReverse(-123)).toBe(-321);
  expect(numberReverse(120)).toBe(21);
  expect(numberReverse(0)).toBe(0);
  //expect(numberReverse(-0)).toBe(-0);
});
