export function race(n: number, arr1: number[], arr2: number[]) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let l1 = 0;
  let r1 = n - 1;
  let l2 = 0;
  let r2 = n - 1;
  let res = 0;
  while (l1 < n && l2 < n && r1 >= 0 && r2 >= 0) {
    if (arr1[r1] > arr2[r2]) {
      r1--;
      r2--;
      res++;
    } else if (arr1[l1] > arr2[l2]) {
      l1++;
      l2++;
      res++;
    } else if (arr1[l1] < arr2[r2]) {
      l1++;
      r2--;
      res--;
    }
  }
  return res;
}
