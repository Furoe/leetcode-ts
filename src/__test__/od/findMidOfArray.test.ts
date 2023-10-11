import { test, expect } from "vitest";
import { findMidOfArray } from "@/od/findCenterOfArray";

test("数组中点", () => {
  expect(findMidOfArray([2, 5, 3, 6, 5, 6])).toBe(3);
});
