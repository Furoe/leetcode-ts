function sort(numbers: number[], left: number, right: number) {
  if (left >= right) return;
  let partionIndex = partion(numbers, left, right);
  sort(numbers, left, partionIndex - 1);
  sort(numbers, partionIndex + 1, right);
}

function partion(numbers: number[], left: number, right: number) {
  // single side
  // let pivot = numbers[left];
  // let mark = left;
  // for (let i = left + 1; i <= right; i++) {
  //   if (numbers[i] < pivot) {
  //     mark++;
  //     let temp = numbers[mark];
  //     numbers[mark] = numbers[i];
  //     numbers[i] = temp;
  //   }
  // }
  // numbers[left] = numbers[mark];
  // numbers[mark] = pivot;
  let pivot = numbers[left];
  while (left < right) {
    while (left < right && numbers[right] >= pivot) {
      right--;
    }
    if (left < right) {
      numbers[left] = numbers[right];
    }
    while (left < right && numbers[left] <= pivot) {
      left++;
    }
    if (left < right) {
      numbers[right] = numbers[left];
    }
  }
  numbers[left] = pivot;
  return left;
}

export function quickSort(numbers: number[]) {
  sort(numbers, 0, numbers.length - 1);
  return numbers;
}
