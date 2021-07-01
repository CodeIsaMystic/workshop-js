import { telephoneCheck } from './phoneNumValidator'


describe('telephoneCheck function return true value', () => {
  test('should return a true when the input is `555-555-5555`', () => {
    const inputString = "555-555-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(true)
  })
  test('should return a true when the input is `1 555-555-5555`', () => {
    const inputString = "1 555-555-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(true)
  })
  test('should return a true when the input is `1 456 789 4444`', () => {
    const inputString = "1 456 789 4444"
    const result = telephoneCheck(inputString)

    expect(result).toBe(true)
  })
})




describe('telephoneCheck function returns false value', () => {
  test('should return a false when the input is `555-5555`', () => {
    const inputString = "555-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `5555555`', () => {
    const inputString = "5555555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `1 555)555-5555`', () => {
    const inputString = "1 555)555-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `123**&!!asdf#`', () => {
    const inputString = "123**&!!asdf#"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `2 (757) 622-7382`', () => {
    const inputString = "2 (757) 622-7382"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `-1 (757) 622-7382`', () => {
    const inputString = "-1 (757) 622-7382"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `555)-555-5555`', () => {
    const inputString = "555)-555-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
  test('should return a false when the input is `(555)5(55?)-5555`', () => {
    const inputString = "(555)5(55?)-5555"
    const result = telephoneCheck(inputString)

    expect(result).toBe(false)
  })
})