export function topIncome(arr: number[][]) {
  const len = arr.length;
  arr.sort((a, b) => b[1] - a[1]);
  const agent = {};
  for (let i = 0; i < len; i++) {
    let [seq, p_seq, money] = arr[i];
    if (agent[seq]) money += agent[seq];
    if (!agent[p_seq]) agent[p_seq] = 0;
    agent[p_seq] += Math.floor(money / 100) * 15;
  }
  return agent[arr[len - 1][1]];
}
