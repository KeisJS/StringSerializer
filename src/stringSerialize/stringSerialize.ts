import { bit4number, codes, maxNumberPerChar } from '../constants.ts';

type SerializeFormat = 'oneChar' | 'twoChar'
type RepeatValue = [count: number, value: number]

const binStringToCode = (binStr: string) => codes[parseInt(binStr, 2)]
function convertNumberToChar(value: number) {
  const binValue = value.toString(2).padStart(bit4number * 2, '0')
  
  return `${binStringToCode(binValue.substring(0, bit4number))}${binStringToCode(binValue.substring(bit4number))}`
}

function serializeNumbers(data: number[], format: SerializeFormat = 'twoChar') {
  let result = convertNumberToChar(data.length)
  
  for (const value of data) {
    const charValue = convertNumberToChar(value)
    result += format === 'twoChar' ? charValue : charValue[1]
  }
  
  return result
}

function serializeRepeatNumber(data: RepeatValue[], format: SerializeFormat = 'twoChar') {
  let result = convertNumberToChar(data.length)
  
  for (const [count, value] of data) {
    const charValue = convertNumberToChar(value)
    result += (format === 'twoChar' ? charValue : charValue[1]) + convertNumberToChar(count)
  }
  
  return result
}

const stringSerialize = (data: number[]) => {
  const singleCharGroup: number[] = []
  const twoCharGroup: number[] = []
  const singleCharRepeatGroup: RepeatValue[] = []
  const twoCharRepatGroup: RepeatValue[] = []
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
    } else {
      if (lastValue < maxNumberPerChar) {
        singleCharRepeatGroup.push([ countValue, lastValue])
      } else {
        twoCharRepatGroup.push([ countValue, lastValue ])
      }
    }
  }
  
  for (let i = 1, max = sortedData.length; i < max; i++) {
    const value = sortedData[i]
    
    if (value !== lastValue) {
      groupValue()
      
      lastValue = value
      countValue = 1
    } else {
      countValue++
    }
  }
  
  groupValue()

  return serializeNumbers(singleCharGroup, 'oneChar') +
    serializeNumbers(twoCharGroup) +
    serializeRepeatNumber(singleCharRepeatGroup, 'oneChar') +
    serializeRepeatNumber(twoCharRepatGroup)
}

export default stringSerialize