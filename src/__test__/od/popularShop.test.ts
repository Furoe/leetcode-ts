import { expect, test } from "vitest";
import { popularShop } from "@/od/popularShop";

test("人气最高店铺", () => {
  expect(
    popularShop(5, 5, [
      [2, 10],
      [3, 20],
      [4, 30],
      [5, 40],
      [5, 90],
    ])
  ).toBe(50);
});
