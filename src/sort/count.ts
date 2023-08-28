export function count(numbers: number[]): number[] {
  let len = numbers.length;
  if (len === 0) return [];
  let res = [];
  let maxNum = numbers[0];
  for (let i = 1; i < len; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  let arr = new Array(maxNum + 1);
  for (let i = 0; i < len; i++) {
    if (arr[numbers[i]] !== undefined) {
      arr[numbers[i]]++;
    } else {
      arr[numbers[i]] = 1;
    }
  }
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      while (arr[i] > 0) {
        numbers[index++] = i;
        arr[i]--;
      }
    }
  }
  return numbers;
}
