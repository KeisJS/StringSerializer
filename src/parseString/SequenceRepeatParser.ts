import { Parser } from './Parser.ts'
import type { SequenceParserParams } from './types.ts'
import { countCharLength } from '../constants.ts'

class SequenceRepeatParser extends Parser {
  private valueLength: SequenceParserParams['valueLength']
  constructor(params: SequenceParserParams) {
    super(params)
    
    const { valueLength } = params
    this.valueLength = valueLength
  }
  
  parse = () => {
    const { stringValue, result } = this
    const count2read = stringValue.readValue(countCharLength)
    const maxOffset = stringValue.offset + count2read * (countCharLength + this.valueLength)
    
    while(stringValue.offset < maxOffset) {
      const char = stringValue.readValue(this.valueLength)
      const countChar = stringValue.readValue(countCharLength)
      
      for (let i = 0, max = countChar; i < max; i++) {
        result.push(char)
      }
    }
  }
}

export {
  SequenceRepeatParser
}