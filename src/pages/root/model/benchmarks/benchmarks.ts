import { SimpleTwoChars } from './SimpleTwoChars.ts';
import { SingleCharAndRepeat } from './SingleCharAndRepeat.ts';
import { SimpleTwoCharAndRepeat } from './SimpleTwoCharAndRepeat.ts';
import { RandomValues } from './RandomValues.ts'
import { SequenceSign } from './SequenceSign.ts'
import { EveryThree } from './EveryThree.ts'

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