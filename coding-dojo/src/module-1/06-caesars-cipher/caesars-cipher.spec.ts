import { rot13 } from './caesars-cipher'



describe('rot13', () => {
  test('should return `FREE CODE CAMP` when the input is `SERR PBQR PNZC`', () => {
      const input = "SERR PBQR PNZC"
      const result = rot13(input)

      expect(result).toBe("FREE CODE CAMP")
  })
  test('should return `FREE PIZZA` when the input is `SERR CVMMN!`', () => {
    const input = "SERR CVMMN!"
    const result = rot13(input)

    expect(result).toBe("FREE PIZZA!")
  })
  test('should return `FREE LOVE?` when the input is `SERR YBIR?`', () => {
    const input = "SERR YBIR?"
    const result = rot13(input)

    expect(result).toBe("FREE LOVE?")
  })
  test('should return `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.` when the input is `GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.`', () => {
    const input = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
    const result = rot13(input)

    expect(result).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
  })
})