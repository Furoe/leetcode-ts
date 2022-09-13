import { expect, test } from "vitest";
import { twoSum } from "@/leetcode/easy/twoSum";

test("测试两数之和", () => {
  expect(twoSum([1, 2, 3], 3)).toStrictEqual([+0, 1]);
});
