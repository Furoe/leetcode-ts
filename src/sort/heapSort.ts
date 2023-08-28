function sink(numbers: number[], index: number, len: number) {
  let leftNode = 2 * index + 1;
  let rightNode = 2 * index + 2;
  let current = index;
  if (leftNode < len && numbers[leftNode] > numbers[current]) {
    current = leftNode;
  }
  if (rightNode < len && numbers[rightNode] > numbers[current]) {
    current = rightNode;
  }
  if (current !== index) {
    swap(numbers, index, current);
    sink(numbers, current, len);
  }
}

function buildHeap(numbers: number[]) {
  const len = numbers.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    sink(numbers, i, len);
  }
}

function swap(numbers: number[], top: number, bottom: number) {
  let temp = numbers[top];
  numbers[top] = numbers[bottom];
  numbers[bottom] = temp;
}

export function heapSort(numbers: number[]): number[] {
  let len = numbers.length;
  buildHeap(numbers);
  for (let i = len - 1; i > 0; i--) {
    swap(numbers, 0, i);
    len--;
    sink(numbers, 0, len);
  }
  return numbers;
}
