import { test, expect } from "vitest";
import { ipv4ToNums } from "@/od/ipv4ToNums";

test("测试IP转换成数字", () => {
  expect(ipv4ToNums("100#101#1#5")).toBe(1684340997);
  expect(ipv4ToNums("1#2#3")).toBe("invalid IP");
  expect(ipv4ToNums("10#10#10#10")).toBe(168430090);
});
