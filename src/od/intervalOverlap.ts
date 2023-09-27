export function intervalOverlap(len: number, arr: number[][]) {
  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);
  const res = [];
  let base = arr[0];
  for (let i = 1; i < len; i++) {}
  console.log(res);
  return res.length;
}
