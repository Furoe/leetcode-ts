function merge(numbers: number[], left: number, mid: number, right: number) {
  let tempArr: number[] = [];
  let l = left,
    r = mid + 1;
  let index = 0;
  while (l <= mid && r <= right) {
    if (numbers[l] <= numbers[r]) {
      tempArr[index++] = numbers[l++];
    } else {
      tempArr[index++] = numbers[r++];
    }
  }
  while (l <= mid) {
    tempArr[index++] = numbers[l++];
  }
  while (r <= right) {
    tempArr[index++] = numbers[r++];
  }
  for (let i = 0; i < right - left + 1; i++) {
    numbers[i + left] = tempArr[i];
  }
}

function sort(numbers: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  let mid = left + Math.floor((right - left) / 2);
  sort(numbers, left, mid);
  sort(numbers, mid + 1, right);
  merge(numbers, left, mid, right);
}

export function mergeSort(numbers: number[]): number[] {
  sort(numbers, 0, numbers.length - 1);
  return numbers;
}
