import { test, expect } from "vitest";
import { longestPalindrome } from "@/leetcode/medium/longestPalindrome";

test("测试字符串最长回文子串", () => {
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
});
