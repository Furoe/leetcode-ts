export function shortestStep(n: number) {
  let step = 0;
  if (n === 1) return 2;
  while (n > 0) {
    if (n > 4) {
      step++;
      n -= 3;
    } else if (n === 4) {
      step += 2;
      break;
    } else if (n - 3 === 0 || n - 2 === 0) {
      step++;
      break;
    }
  }
  return step;
}

export function shortestStepByDP(n: number) {
  let dp: number[] = [0, 2, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 3]) + 1;
  }
  return dp[n];
}
