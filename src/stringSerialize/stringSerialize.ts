import { bit4number, codes, maxNumberPerChar } from './constants.ts';

const binStringToCode = (binStr: string) => codes[parseInt(binStr, 2)]
function convertNumberToChar(value: number) {
  const binValue = value.toString(2).padStart(bit4number * 2, '0')
  
  return `${binStringToCode(binValue.substring(0, 6))}${binStringToCode(binValue.substring(6))}`
}
function serializeOneCharData(data: number[]) {
  let result = convertNumberToChar(data.length)
  
  for (const value of data) {
    result += convertNumberToChar(value)[1]
  }
  
  return result
}

function serializeTwoCharData(data: number[]) {
  let result = convertNumberToChar(data.length)
  
  for (const value of data) {
    result += convertNumberToChar(value)
  }
  
  return result
}

const stringSerialize = (data: number[]) => {
  const singleCharGroup: number[] = []
  const twoCharGroup: number[] = []
  const sortedData = data.toSorted((a, b) => a - b)
  
  let lastValue: number = sortedData[0]
  let countValue: number = 1
  
  const groupValue = () => {
    if (countValue === 1) {
      if (lastValue < maxNumberPerChar) {
        singleCharGroup.push(lastValue)
      } else {
        twoCharGroup.push(lastValue)
      }
    }
  }
  
  for (let i = 1, max = sortedData.length; i < max; i++) {
    const value = sortedData[i]
    
    if (value !== lastValue) {
      groupValue()
    }
    
    lastValue = value
    countValue = 1
  }
  
  groupValue()
  
  
  return serializeOneCharData(singleCharGroup) + serializeTwoCharData(twoCharGroup)
}

export default stringSerialize