export function telephoneCheck(string: string): boolean {
  const regexUSPhoneNum = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm

  return regexUSPhoneNum.test(string);
}

// console.log(telephoneCheck("555-555-5555"))
// console.log(telephoneCheck("1 555-555-5555"))
// console.log(telephoneCheck("1 456 789 4444"))

// console.log(telephoneCheck("555-5555"))
// console.log(telephoneCheck("5555555"))
// console.log(telephoneCheck("1 555)555-5555"))
// console.log(telephoneCheck("123**&!!asdf#"))
// console.log(telephoneCheck("(6054756961)"))
// console.log(telephoneCheck("2 (757) 622-7382"))
// console.log(telephoneCheck("-1 (757) 622-7382"))
// console.log(telephoneCheck("555)-555-5555"))
// console.log(telephoneCheck("(555)5(55?)-5555"))