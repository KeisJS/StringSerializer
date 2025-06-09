import { bit4number, codes } from '../stringSerialize/constants.ts'

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
function parseSingleCharData(data: StringValue, result: number[]) {
  const { value, offset } = data
  let currentOffset = offset + 2
  const maxOffset = currentOffset + code2number(data.value.substring(0, 2))
  
  while (currentOffset < maxOffset) {
    result.push(code2number(value[currentOffset]))
    
    currentOffset++
  }
}

const parseString = (data: string) => {
  const stringValue: StringValue = {
    value: data,
    offset: 0
  }
  
  const result: number[] = []
  const parsers = [
    parseSingleCharData.bind(undefined, stringValue, result)
  ]
  
  for (const parser of parsers) {
    parser()
  }
  
  return result
}

export default parseString