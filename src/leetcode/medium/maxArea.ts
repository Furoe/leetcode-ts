export function maxArea(height: number[]): number {
  let i: number = 0,
    j: number = height.length - 1;
  let MAX_AREA: number = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      MAX_AREA = Math.max(MAX_AREA, (j - i) * height[i]);
      i += 1;
    } else {
      MAX_AREA = Math.max(MAX_AREA, (j - i) * height[j]);
      j -= 1;
    }
  }
  return MAX_AREA;
}
