import { test, expect } from "vitest";
import { numberOfSurvivePerson } from "@/od/numberOfAlivePerson";

test("荒岛求生", () => {
  expect(numberOfSurvivePerson([5, 10, 8, -8, 5])).toBe(2);
});
