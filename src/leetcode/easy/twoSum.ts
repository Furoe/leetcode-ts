export function twoSum(numbers: number[], target: number){
  const len:number = numbers.length
  if(len > 1){
    let resMap: Map<number,any> = new Map()
    for(let i = 0;i < len;i++){
      const res = target - numbers[i]
      if(resMap.has(res)){
        return [resMap.get(res), i]
      }
      resMap.set(numbers[i], i)
    }
  }
  return []
}