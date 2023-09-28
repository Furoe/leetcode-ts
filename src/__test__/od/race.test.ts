import { test, expect } from "vitest";
import { race } from "@/od/race";

test("田忌赛马", () => {
  expect(race(4, [2, 7, 11, 15], [1, 10, 4, 11])).toBe(4);
  expect(race(4, [12, 24, 8, 32], [13, 25, 32, 11])).toBe(2);
});
