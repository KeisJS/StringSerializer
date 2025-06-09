import { singleSignValues } from './singleSignValues.ts';
import { twoCharsValues } from './twoCharsValues.ts';
import { singleCharAndRepeatValues } from './singleCharAndRepeatValues.ts';
import { twoCharAndRepeatValues } from './twoCharAndRepeatValues.ts';

const benchmarks = [
  singleSignValues(),
  twoCharsValues(),
  singleCharAndRepeatValues(),
  twoCharAndRepeatValues()
]

export {
  benchmarks
}