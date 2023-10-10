import { test, expect } from "vitest";
import { countScore } from "@/od/countScore";

test("玩牌高手", () => {
  expect(countScore([1, -5, -6, 4, 3, 6, -2])).toBe(11);
});
