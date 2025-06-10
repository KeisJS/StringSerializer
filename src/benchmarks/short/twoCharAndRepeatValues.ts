import Benchmark from '../Benchmark.ts'

class SimpleTwoCharAndRepeat extends Benchmark {
  description = 'числа два знака с повторением'
  
  generateData(): number[] {
    return Array(20).fill('').map((_v, index) => 100 + index % 10)
  }
}

export {
  SimpleTwoCharAndRepeat
}