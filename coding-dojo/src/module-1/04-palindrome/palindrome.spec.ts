import { palindrome } from "./palindrome";

describe('Palindrome Kata', () => {
    test('should return a boolean when `eye` as input', () => {
        const input = 'eye'
        const result = palindrome(input)

        expect(result).toBe(true)
    })
    test('should return true when `eye` as input', () => {
      const input = 'eye'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return true when `_eye` as input', () => {
      const input = '_eye'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return true when `race car` as input', () => {
      const input = 'race car'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return false when `not a palindrome` as input', () => {
      const input = 'not a palindrome'
      const result = palindrome(input)

      expect(result).toBe(false)
    })
    test('should return true when `A man, a plan, a canal. Panama` as input', () => {
      const input = 'A man, a plan, a canal. Panama'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return true when `never odd or even` as input', () => {
      const input = 'never odd or even'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return false when `nope` as input', () => {
      const input = 'nope'
      const result = palindrome(input)

      expect(result).toBe(false)
    })
    test('should return false when `almostomla` as input', () => {
      const input = 'almostomla'
      const result = palindrome(input)
      
      expect(result).toBe(false)
    })
    test('should return true when `My age is ,  si ega ym.` as input', () => {
      const input = 'My age is , si ega ym.'
      const result = palindrome(input)
      
      expect(result).toBe(true)
    })
    test('should return false when `1 eye for of 1 eye` as input', () => {
      const input = '1 eye for of 1 eye'
      const result = palindrome(input)

      expect(result).toBe(false)
    })
    test('should return true when `0_0 (: /-\ :) 0-0` as input', () => {
      const input = '0_0 (: /-\ :) 0-0'
      const result = palindrome(input)

      expect(result).toBe(true)
    })
    test('should return false when `five|\_/|four` as input', () => {
      const input = 'five|\_/|four'
      const result = palindrome(input)

      expect(result).toBe(false)
    })


})