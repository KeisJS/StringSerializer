import { singleSignValues } from './singleSignValues.ts';
import { twoCharsValues } from './twoCharsValues.ts';
import { singleCharAndRepeatValues } from './singleCharAndRepeatValues.ts';

const benchmarks = [
  singleSignValues(),
  twoCharsValues(),
  singleCharAndRepeatValues()
]

export {
  benchmarks
}