import { test, expect } from "vitest";
import { copyFile } from "@/od/copyFile";

test("软盘拷贝文件", () => {
  expect(copyFile(3, [737270, 737272, 737288])).toBe(1474542);
});
