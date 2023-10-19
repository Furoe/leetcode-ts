export function popularShop(n: number, m: number, list: number[][]) {
  list.sort((a, b) => a[1] - b[1]);
  const seq = Math.ceil(n / 2);
  let res = 0;
  for (let i = 0; i < seq; i++) {
    res += list[i][1];
  }
  return res;
}
