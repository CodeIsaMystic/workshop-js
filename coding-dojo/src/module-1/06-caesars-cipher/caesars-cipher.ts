const ALPHABET_ENCODED: object =  
{
  'A': 'N', 'B': 'O', 
  'C': 'P', 'D': 'Q', 
  'E': 'R', 'F': 'S',
  'G': 'T', 'H': 'U', 
  'I': 'V', 'J': 'W', 
  'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 
  'O': 'B', 'P': 'C', 
  'Q': 'D', 'R': 'E',
  'S': 'F', 'T': 'G', 
  'U': 'H', 'V': 'I', 
  'W': 'J', 'X': 'K',
  'Y': 'L','Z': 'M', 
  ' ': ' ', '?': '?', 
  '.': '.', ',': ',',
  ':': ':', ';':';', 
  '/': '/', '!': '!'
} 

const inputStringShifted = (string: string) => string.split('')




export function rot13(string :string) {
  let inputShifted = inputStringShifted(string)

  for (let i = 0; i <inputShifted.length; i++) {
    inputShifted[i] = ALPHABET_ENCODED[inputShifted[i]]
  }

  return inputShifted.join('')
}






console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))