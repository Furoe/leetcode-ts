export function longestPalindrome(s: string): string {
  if (!s || s.length === 0) {
    return "";
  }
  let start: number = 0,
    end: number = 0;
  let len: number = s.length;
  let findLen = (str: string, startIndex: number, endIndex: number): number => {
    while (
      startIndex >= 0 &&
      endIndex < len &&
      str.charAt(startIndex) === str.charAt(endIndex)
    ) {
      --startIndex;
      ++endIndex;
    }
    return endIndex - startIndex - 1;
  };
  for (let i = 0; i < len; i++) {
    let len1: number = findLen(s, i, i);
    let len2: number = findLen(s, i, i + 1);
    let maxLen = Math.max(len1, len2);
    if (maxLen > end - start + 1) {
      if (len1 > len2) {
        start = i - (maxLen - 1) / 2;
        end = i + maxLen / 2;
      } else {
        start = i + 1 - maxLen / 2;
        end = i + maxLen / 2;
      }
    }
  }
  return s.substring(start, end + 1);
}
