import { bit4number, codes, countCharLength } from '../constants.ts'

type StringValue = {
  value: string
  offset: number
}

function code2number(value: string) {
  if (value.length === 1) {
    return codes.indexOf(value)
  }
  
  const firstPart = codes.indexOf(value[0]).toString(2)
  const secondPart = codes.indexOf(value[1]).toString(2).padStart(bit4number, '0')
  
  return parseInt(`${firstPart}${secondPart}`, 2)
}
function parseSingleCharData(data: StringValue, result: number[], charLength: 1 | 2 = 1) {
  const { value, offset } = data
  let currentOffset = offset + countCharLength
  const maxOffset = currentOffset + code2number(value.substring(offset, offset + countCharLength)) * charLength
  
  while (currentOffset < maxOffset) {
    result.push(code2number(value.substring(currentOffset, currentOffset + charLength)))
    
    currentOffset = currentOffset + charLength
  }
  
  data.offset = currentOffset
}

function parseTwoCharData(data: StringValue, result: number[], charLength: 1 | 2 = 1) {
  const { value, offset } = data
  let currentOffset = offset + countCharLength
  const maxOffset = currentOffset + code2number(value.substring(offset, offset + countCharLength)) * (charLength + countCharLength)
  
  while(currentOffset < maxOffset) {
    const char = value.substring(currentOffset, currentOffset + charLength)
    const countChar = value.substring(currentOffset + charLength, currentOffset + charLength + countCharLength)
    const number = code2number(char)
    
    for (let i = 0, max = code2number(countChar); i < max; i++) {
      result.push(number)
    }
    
    currentOffset += charLength + countCharLength
  }
  
  data.offset = currentOffset
}

const parseString = (data: string) => {
  const stringValue: StringValue = {
    value: data,
    offset: 0
  }
  
  const result: number[] = []
  const parsers = [
    parseSingleCharData.bind(undefined, stringValue, result),
    parseSingleCharData.bind(undefined, stringValue, result, 2),
    parseTwoCharData.bind(undefined, stringValue, result),
    parseTwoCharData.bind(undefined, stringValue, result, 2)
  ]
  
  for (const parser of parsers) {
    parser()
  }
  
  return result
}

export default parseString