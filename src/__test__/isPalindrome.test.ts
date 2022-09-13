import { expect, test } from "vitest";
import { isPalindrome } from "@/leetcode/easy/isPalindrome";

test("测试回文数", () => {
  expect(isPalindrome(1234)).toStrictEqual(false);
  expect(isPalindrome(121)).toStrictEqual(true);
});
