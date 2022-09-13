import { defineConfig } from "vitest/config";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  test: {
    clearMocks: true,
    alias: [
      {
        find: "@",
        replacement: pathResolve("src") + "/",
      },
    ],
  },
});
