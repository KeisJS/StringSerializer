import { singleSignValues } from './singleSignValues.ts';
import { twoCharsValues } from './twoCharsValues.ts';

const benchmarks = [
  singleSignValues(),
  twoCharsValues()
]

export {
  benchmarks
}