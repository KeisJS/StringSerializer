import type { StringValue } from '../StringValue'
import type { ParserParams } from './types.ts'

abstract class Parser {
  protected stringValue: StringValue
  protected result: number[]
  
  constructor(params: ParserParams) {
    const { stringValue, result } = params
    this.stringValue = stringValue
    this.result = result
  }
  
  readCount() {
    return this.stringValue.readValue(2)
  }
  
  abstract parse: (result: number[]) => void
}

export {
  Parser
}