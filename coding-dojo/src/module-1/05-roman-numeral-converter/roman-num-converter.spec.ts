import { convertToRomanNumeral } from "./roman-num-converter"


describe('convertToRomanNumeral', () => {
  test('convertToRomanNumeral should returns `XXXVI` when num is `36`', () => {
    const num = 36
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XXXVI")
  })
  test('convertToRomanNumeral should returns `II` when num is `2`', () => {
    const num = 2
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("II")
  })
  test('convertToRomanNumeral should returns `III` when num is `3`', () => {
    const num = 3
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("III")
  })
  test('convertToRomanNumeral should returns `IV` when num is `4`', () => {
    const num = 4
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("IV")
  })
  test('convertToRomanNumeral should returns `V` when num is `5`', () => {
    const num = 5
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("V")
  })
  test('convertToRomanNumeral should returns `IX` when num is `9`', () => {
    const num = 9
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("IX")
  })
  test('convertToRomanNumeral should returns `XII` when num is `12`', () => {
    const num = 12
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XII")
  })
  test('convertToRomanNumeral should returns `XVI` when num is `16`', () => {
    const num = 16
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XVI")
  })
  test('convertToRomanNumeral should returns `XXIX` when num is `29`', () => {
    const num = 29
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XXIX")
  })
  test('convertToRomanNumeral should returns `XLIV` when num is `44`', () => {
    const num = 44
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XLIV")
  })
  test('convertToRomanNumeral should returns `XLV` when num is `45`', () => {
    const num = 45
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XLV")
  })
  test('convertToRomanNumeral should returns `LXVIII` when num is `68`', () => {
    const num = 68
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("LXVIII")
  })
  test('convertToRomanNumeral should returns `LXXXIII` when num is `83`', () => {
    const num = 83
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("LXXXIII")
  })
  test('convertToRomanNumeral should returns `XCVII` when num is `97`', () => {
    const num = 97
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XCVII")
  })
  test('convertToRomanNumeral should returns `XCIX` when num is `99`', () => {
    const num = 99
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("XCIX")
  })
  test('convertToRomanNumeral should returns `CD` when num is `400`', () => {
    const num = 400
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("CD")
  })
  test('convertToRomanNumeral should returns `D` when num is `500`', () => {
    const num = 500
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("D")
  })
  test('convertToRomanNumeral should returns `DI` when num is `501`', () => {
    const num = 501
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("DI")
  })
  test('convertToRomanNumeral should returns `DCXLIX` when num is `649`', () => {
    const num = 649
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("DCXLIX")
  })
  test('convertToRomanNumeral should returns `DCCXCVIII` when num is `798`', () => {
    const num = 798
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("DCCXCVIII")
  })
  test('convertToRomanNumeral should returns `DCCCXCI` when num is `891`', () => {
    const num = 891
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("DCCCXCI")
  })
  test('convertToRomanNumeral should returns `M` when num is `1000`', () => {
    const num = 1000
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("M")
  })
  test('convertToRomanNumeral should returns `MIV` when num is `1004`', () => {
    const num = 1004
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("MIV")
  })
  test('convertToRomanNumeral should returns `MVI` when num is `1006`', () => {
    const num = 1006
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("MVI")
  })
  test('convertToRomanNumeral should returns `MXXIII` when num is `1023`', () => {
    const num = 1023
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("MXXIII")
  })
  test('convertToRomanNumeral should returns `MMXIV` when num is `2014`', () => {
    const num = 2014
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("MMXIV")
  })
  test('convertToRomanNumeral should returns `MMMCMXCIX` when num is `3999`', () => {
    const num = 3999
    const result = convertToRomanNumeral(num)
    
    expect(result).toBe("MMMCMXCIX")
  })
})