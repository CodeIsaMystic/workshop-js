const REGEX = /[\W_]/g

const strToLowerCase = (string:string): string => string.toLowerCase()



export function palindrome(string: string): boolean {
  let strMinimized = strToLowerCase(string).replace(REGEX, '')
  let strReversed = strMinimized.split('').reverse().join('')

  return strReversed === strMinimized
          ? true 
          : false
  
}



palindrome("eye");                            // returns a bool / true
palindrome("_eye");                           // returns true
palindrome("race car");                       // returns true
palindrome("not a palindrome");               // returns false
palindrome("A man, a plan, a canal. Panama"); // returns true
palindrome("never odd or even");              // returns true
palindrome("nope");                           // returns false
palindrome("almostomla");                     // returns false
palindrome("My age is 0, 0 si ega ym.");      // returns true
palindrome("1 eye for of 1 eye");             // returns false
palindrome("0_0 (: /-\ :) 0-0");              // returns true
palindrome("five|\_/|four");                  // returns false