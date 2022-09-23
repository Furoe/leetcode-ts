export function myAtoi(s: string): number {
  const MAX_NUM: number = Math.pow(2, 31) - 1;
  const MIN_NUM: number = Math.pow(-2, 31);
  let res = parseInt(s);
  if (isNaN(res)) {
    return 0;
  }
  if (res > MAX_NUM) {
    return MAX_NUM;
  }
  if (res < MIN_NUM) {
    return MIN_NUM;
  }
  return res;
}
