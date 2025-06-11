import Benchmark from './Benchmark.ts'
import { genRandomNumber } from '../utils/genRandomNumber.ts'

class RandomValues extends Benchmark {
  description = `Произвольные ${this.length}`
  
  generateData(): number[] {
    return Array(this.length).fill('').map(() => genRandomNumber(this.start, this.end))
  }
}

export {
  RandomValues
}