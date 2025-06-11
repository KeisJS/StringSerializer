import type { StringValue } from './StringValue.ts'

type ParserParams  = {
  stringValue: StringValue
  result: number[]
}

type SequenceParserParams = {
  valueLength: 1 | 2
} & ParserParams

export type {
  ParserParams,
  SequenceParserParams
}