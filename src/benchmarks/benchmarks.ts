import { SimpleTwoChars } from './short/twoCharsValues.ts';
import { SingleCharAndRepeat } from './short/singleCharAndRepeatValues.ts';
import { SimpleTwoCharAndRepeat } from './short/twoCharAndRepeatValues.ts';
import { RandomValues } from './long/randomValues.ts'
import { SequenceSign } from './long/SequenceSign.ts'
import { EveryThree } from './long/EveryThree.ts'

const benchmarks = [
  new SimpleTwoChars(),
  new SingleCharAndRepeat(),
  new SimpleTwoCharAndRepeat(),
  new RandomValues({ length: 50 }),
  new RandomValues({ length: 100 }),
  new RandomValues({ length: 500 }),
  new RandomValues({ length: 1000 }),
  new SequenceSign({ start: 1, end: 9}),
  new SequenceSign({ start: 10, end: 99 }),
  new SequenceSign({ start: 100, end: 300 }),
  new EveryThree()
]

export {
  benchmarks
}