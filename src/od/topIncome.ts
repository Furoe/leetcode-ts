export function topIncome(arr: number[][]) {
  const len = arr.length;
  let stack = [0];
  let relArr = [];
  for (let i = 0; i < len; i++) {
    stack[arr[i][0]] = arr[i][2];
    relArr[arr[i][0]] = arr[i][1];
  }
  let j = len;
  while (j > 0) {
    stack[relArr[j]] += Math.floor(stack[j] / 100) * 15;
    j--;
  }
  return stack[0];
}
