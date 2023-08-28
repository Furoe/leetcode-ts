/**
 * 插入排序
 */
export function insert(numbers: number[]): number[] {
  const len = numbers.length;
  for (let i = 1; i < len; i++) {
    let value = numbers[i];
    for (var j = i - 1; j >= 0; j--) {
      if (numbers[j] > value) {
        numbers[j + 1] = numbers[j];
      } else {
        break;
      }
    }
    numbers[j + 1] = value;
  }
  return numbers;
}
