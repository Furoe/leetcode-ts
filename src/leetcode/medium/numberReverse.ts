export function numberReverse(x: number): number {
  let rev: number = 0;
  const MAX_NUM: number = Math.pow(2, 31) - 1;
  const MIN_NUM: number = Math.pow(-2, 31);
  while (x !== 0) {
    const digit: number = x % 10;
    x = ~~(x / 10);
    rev = rev * 10 + digit;
    if (rev < MIN_NUM || rev > MAX_NUM) {
      return 0;
    }
  }
  return rev;
}
