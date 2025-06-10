import Benchmark from '../Benchmark.ts'

class SimpleTwoChars extends Benchmark {
  description = 'числа в 2 символа'
  
  generateData(): number[] {
    return Array(10).fill('').map((_v, index) => 100 + index)
  }
}

export {
  SimpleTwoChars
}