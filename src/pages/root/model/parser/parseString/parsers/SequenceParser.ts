import { Parser } from './Parser.ts'
import type { SequenceParserParams } from './types.ts'
import { countCharLength } from '@/pages/root/model/constants.ts'

class SequenceParser extends Parser {
  private valueLength: SequenceParserParams['valueLength']
  constructor(params: SequenceParserParams) {
    super(params)
    
    const { valueLength } = params
    
    this.valueLength = valueLength
  }
  
  parse = () => {
    const count2read = this.stringValue.readValue(countCharLength)
    const maxOffset = this.stringValue.offset + count2read * this.valueLength
    
    while (this.stringValue.offset < maxOffset) {
      this.result.push(this.stringValue.readValue(this.valueLength))
    }
  }
}

export {
  SequenceParser
}