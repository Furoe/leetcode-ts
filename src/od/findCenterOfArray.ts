export function findMidOfArray(arr: number[]) {
  if (arr.length < 3) return -1;
  let left = arr[0];
  const sum = arr.reduce((prev, cur) => prev * cur, 1);
  let right = sum / (arr[0] * arr[1]);
  const len = arr.length;
  let i = 1;
  while (i < len - 1) {
    if (left === right) {
      return i;
    } else {
      left *= arr[i];
      right /= arr[i + 1];
      i++;
    }
  }
  return -1;
}
