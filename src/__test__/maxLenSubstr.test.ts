import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "@/leetcode/medium/maxLenSubstr";

test("测试最长无重复子串长度", () => {
  expect(lengthOfLongestSubstring("abba")).toBe(2);
});
