export function findMinOfMaxCols(matrix: number[][]) {
  const n = matrix.length;
  const m = matrix[0].length;
  let min = +Infinity;
  for (let i = 0; i < m; i++) {
    let max = -Infinity;
    let isBreak = false;
    for (let j = 0; j < n; j++) {
      if (matrix[j][i] >= min) {
        isBreak = true;
        break;
      }
      max = Math.max(max, matrix[j][i]);
    }
    if (isBreak) continue;
    min = Math.min(min, max);
  }
  return min;
}
