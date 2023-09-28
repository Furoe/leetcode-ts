import { test, expect } from "vitest";
import { saveMemory } from "@/od/saveMemory";

test("节省内存", () => {
  expect(saveMemory([100, 500, 300, 200, 400])).toBe(3);
});
