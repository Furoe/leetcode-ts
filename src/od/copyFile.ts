export function copyFile(num: number, list: number[]) {
  list.sort((a, b) => a - b);
  const max = 1474560 / 512;
  const newList = list.map((size) => Math.ceil(size / 512));
  let total = 0;
  let res = 0;
  for (let i = 0; i < num; i++) {
    if (total + newList[i] > max) {
      break;
    } else {
      total += newList[i];
      res += list[i];
    }
  }
  return res;
}
