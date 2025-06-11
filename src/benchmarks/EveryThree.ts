import Benchmark from './Benchmark.ts'

class EveryThree extends Benchmark {
  description = 'Каждого числа по 3'
  
  generateData(): number[] {
    return Array(900).fill('').map((_v, i) => i % 300 + 1)
  }
}

export {
  EveryThree
}