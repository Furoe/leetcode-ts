export function saveMemory(files: number[]) {
  files.sort((a, b) => a - b);
  let i = 0,
    j = files.length - 1;
  let res = 0;
  let size = 0;
  while (i < j) {
    size = size + files[i] + files[j];
    if (size > 500) {
      j--;
      res++;
      size = 0;
    } else if (size === 500) {
      i++;
      j--;
      res++;
      size = 0;
    } else {
      size = files[i++];
    }
  }
  if (i === j) res++;
  return res;
}
