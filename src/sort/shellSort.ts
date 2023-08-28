export function shellSort(numbers: number[]): number[] {
  const len = numbers.length;
  let step = numbers.length;
  while (step > 0) {
    step = Math.floor(step / 2);
    for (let i = 0; i < step; i++) {
      for (let j = i + step; j < len; j += step) {
        let value = numbers[j];
        let k;
        for (k = j - step; j >= 0; k -= step) {
          if (numbers[k] > value) {
            numbers[k + step] = numbers[k];
          } else {
            break;
          }
        }
        numbers[k + step] = value;
      }
    }
  }
  return numbers;
}
