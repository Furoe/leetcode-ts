export function selectSort(numbers: number[]): number[] {
  const len = numbers.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i + 1;
    for (let j = i + 1; j < len; j++) {
      if (numbers[min] > numbers[j]) {
        min = j;
      }
    }
    if (numbers[i] > numbers[min]) {
      let temp = numbers[i];
      numbers[i] = numbers[min];
      numbers[min] = temp;
    }
  }
  return numbers;
}
