export function intervalOverlap(len: number, arr: number[][]) {
  arr.sort((a, b) => a[0] - b[0]);
  let res = 1;
  let max = arr[0][1];
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    while (j < len && arr[j][0] <= arr[i][1]) {
      max = Math.max(max, arr[j][1]);
      j++;
    }
    res++;
    i = j - 1;
  }
  return res;
}
