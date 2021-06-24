const NUM_400 = 400,
      NUM_4   = 4,
      NUM_100 = 100;

const divisibleBy = (inputNum: number, divisionNum: number) => {
  return (inputNum % divisionNum) === 0
}

export function isLeap(year: number): boolean {

  if(divisibleBy(year, NUM_400)) return true
  if(divisibleBy(year, NUM_100)) return false
  if(divisibleBy(year, NUM_4)) return true

  
  return false
}

