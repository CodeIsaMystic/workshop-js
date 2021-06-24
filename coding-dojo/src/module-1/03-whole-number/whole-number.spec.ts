import { isLeap } from "./leap-year";

describe('LeapYear', () => {
    test('isLeap should returns false when year is 2001', () => {
        // Act 
        const year = 2001
        const expected = false

        // Arrange
        const testResult = isLeap(year)

        // Assert
        expect(testResult).toBe(expected)
    })

    test('isLeap should returns true when year is 1996', () => {
        // Act 
        const year = 1996
        const expected = true

        // Arrange
        const testResult = isLeap(year)

        // Assert
        expect(testResult).toBe(expected)
    })

    
    test('isLeap should returns false when year is 1900', () => {
        // Act 
        const year = 1900
        const expected = false

        // Arrange
        const testResult = isLeap(year)

        // Assert
        expect(testResult).toBe(expected)
    })

    test('isLeap should returns true when year is 2000', () => {
        // Act 
        const year = 2000
        const expected = true

        // Arrange
        const testResult = isLeap(year)

        // Assert
        expect(testResult).toBe(expected)
    })


 


})











// Une année bissextile

// une année divisible par 4,      /4
// mais non divisible par 100   !  /100   => except  /400


// sauf si elle est également divisible par 400.






// typical
// 2001 => `false`
// leap typical
// 1996 => `true`
// atypical
// 1900 => `false`
// leap atypical
// 2000 => ``true``