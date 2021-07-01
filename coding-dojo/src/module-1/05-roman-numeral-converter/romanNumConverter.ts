export function convertToRomanNumeral(num: number) {
  let romanConversion = ""

  const romanNum =  {
    "LM": 50000,
    "XM": 10000,
    "VM": 5000,
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
  }

  for(let key in romanNum) {
    while(num >= romanNum[key]) {
      romanConversion += key
      num -= romanNum[key]
    }
  }


  return romanConversion
}


