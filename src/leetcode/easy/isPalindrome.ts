/**
 * 判断一个数是否是回文数
 */
export function isPalindrome(x: number): boolean{
  if(x < 0 || (x % 10 === 0 && x !== 0)){
    return false
  }
  let revertedNum: number = 0
  while(x > revertedNum){
    revertedNum = revertedNum * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === revertedNum || x === Math.floor(revertedNum / 10)
}