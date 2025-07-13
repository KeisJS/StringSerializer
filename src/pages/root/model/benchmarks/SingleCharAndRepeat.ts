import { Benchmark } from '@/pages/root/model/benchmarks/Benchmark.ts'

class SingleCharAndRepeat extends Benchmark {
  description = 'числа одного знака с повторением'
  
  generateData(): number[] {
    return Array(20).fill('').map((_v, index) => index % 3 + 1)
  }
}

export {
  SingleCharAndRepeat
}