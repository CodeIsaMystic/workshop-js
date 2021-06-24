import { fizzBuzz } from "./fizzbuzz";

describe('FizzBuzz', () => {
    test('should return 1 when 1 as input', () => {
        // Act 
        const input = 1
        
        // Arrange 
        const testResult = fizzBuzz(input)


        // Assert 
        expect(testResult).toBe(1)
    })

    test('should return 2 when 2 as input', () => {
        // Act 
        const inputNumber = 2
        const expected = 2
        
        // Arrange 
        const testResult = fizzBuzz(inputNumber)


        // Assert 
        expect(testResult).toBe(expected)
    })

    test('should return Fizz when 3 as input', () => {
        
        const inputNumber = 3
        const expected = 'Fizz'
        
        const testResult = fizzBuzz(inputNumber)

        expect(testResult).toBe(expected)
    })

    test('should return Buzz when 5 as input', () => {
        
        const inputNumber = 5
        const expected = 'Buzz'
        
        const testResult = fizzBuzz(inputNumber)

        expect(testResult).toBe(expected)
    })

    test('should return Fizz when input is 12, as Multiple of 3', () => {
        
        const inputNumber = 12
        const expected = 'Fizz'
        
        const testResult = fizzBuzz(inputNumber)

        expect(testResult).toBe(expected)
    })

    test('should return Buzz when input is 10, as Multiple of 5', () => {
        
        const inputNumber = 10
        const expected = 'Buzz'
        
        const testResult = fizzBuzz(inputNumber)

        expect(testResult).toBe(expected)
    })

    test('should return FizzBuzz when input is 15, as Multiple of 3 AND 5', () => {
        
        const inputNumber = 15
        const expected = 'FizzBuzz'
        
        const testResult = fizzBuzz(inputNumber)

        expect(testResult).toBe(expected)
    })
})