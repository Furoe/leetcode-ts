import { defineConfig } from "vite";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src") + "/",
      },
      {
        find: "fn",
        replacement: pathResolve("src/leetcode") + "/",
      },
      {
        find: "__test__",
        replacement: pathResolve("src/__test__") + "/",
      },
    ],
  },
});
