export function numberOfSurvivePerson(arr: number[]) {
  let left = 0;
  let right = 0;
  const num = arr.length;
  for (let i = 0; i < num; i++) {
    if (arr[i] < 0) {
      left = i - 1;
      right = i;
    }
  }
  while (left >= 0 && right < num) {
    const res = arr[left] + arr[right];
    if (res > 0) {
      arr[right++] = 0;
      arr[left] = res;
    } else if (arr[left] + arr[right] < 0) {
      arr[left--] = 0;
      arr[right] = res;
    } else {
      arr[left--] = 0;
      arr[right++] = 0;
    }
  }
  if (left < 0 && right >= num) {
    return 0;
  } else if (left < 0) {
    return num - right;
  } else if (right >= num) {
    return left + 1;
  }
}
