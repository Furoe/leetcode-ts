export function countScore(scores: number[]) {
  let dpTable: number[] = [];
  const len: number = scores.length;
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dpTable[i] = Math.max(scores[i], 0);
    } else if (i === 1 || i === 2) {
      dpTable[i] = Math.max(dpTable[i - 1] + scores[i], 0);
    } else {
      dpTable[i] = Math.max(dpTable[i - 1] + scores[i], dpTable[i - 3]);
    }
  }
  return dpTable[len - 1];
}
