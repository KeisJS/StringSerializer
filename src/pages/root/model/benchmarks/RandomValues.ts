import { genRandomNumber } from '@/shared/lib'
import { Benchmark } from '@/pages/root/model/benchmarks/Benchmark.ts'

class RandomValues extends Benchmark {
  description = `Произвольные ${this.length}`
  
  generateData(): number[] {
    return Array(this.length).fill('').map(() => genRandomNumber(this.start, this.end))
  }
}

export {
  RandomValues
}