export function findMaxLengthSubString(str: string) {
  let i = 0;
  let j = 0;
  const matchList = "aeiouAEIOU";
  const len = str.length;
  let max = 0;
  while (i < len) {
    if (matchList.indexOf(str.charAt(i)) > -1) {
      j = i + 1;
      while (j < len) {
        if (matchList.indexOf(str.charAt(j)) > -1) {
          j++;
        } else {
          break;
        }
      }
      max = Math.max(max, j - i);
      i = j;
    } else {
      i++;
    }
  }
  return max;
}
