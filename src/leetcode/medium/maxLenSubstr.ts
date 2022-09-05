function lengthOfLongestSubstring(s: string): number {
  let maxLen: number = 0
  const len: number = s.length
  let left: number = 0
  let right: number = 0
  let map: Map<string, number> = new Map()
  while(right < len){
    let letter: string = s[right]
    if(map.has(letter)){
      let inx = map.get(letter) + 1
      left = left > inx ? left : inx
    }
    map.set(letter, right)
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }
  return maxLen
};