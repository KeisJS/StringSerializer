import { StringValue } from '../StringValue'
import { SequenceParser, SequenceRepeatParser } from '@/entities/parseString/parsers'

const parseString = (data: string) => {
  const result: number[] = []
  const stringValue = new StringValue({ value: data })
  
  const parsers = [
    new SequenceParser({
        valueLength: 1,
        stringValue,
        result
    }),
    new SequenceParser({
      valueLength: 2,
      stringValue,
      result
    }),
    new SequenceRepeatParser({
      valueLength: 1,
      stringValue,
      result
    }),
    new SequenceRepeatParser({
      valueLength: 2,
      stringValue,
      result
    })
  ]
  
  for (const parser of parsers) {
    parser.parse()
  }
  
  return result
}

export default parseString