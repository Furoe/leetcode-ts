import { test, expect } from "vitest";
import { shortestStep, shortestStepByDP } from "@/od/shortestStep";

test("最短步数", () => {
  expect(shortestStep(4)).toBe(2);
  expect(shortestStep(7)).toBe(3);
  expect(shortestStep(33)).toBe(11);
  expect(shortestStep(34)).toBe(12);
  expect(shortestStep(1)).toBe(2);

  expect(shortestStepByDP(4)).toBe(2);
  expect(shortestStepByDP(7)).toBe(3);
  expect(shortestStepByDP(33)).toBe(11);
  expect(shortestStepByDP(34)).toBe(12);
  expect(shortestStepByDP(1)).toBe(2);
});
