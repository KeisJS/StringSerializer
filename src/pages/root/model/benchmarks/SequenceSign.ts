import { Benchmark } from '@/pages/root/model/benchmarks/Benchmark.ts'

class SequenceSign extends Benchmark {
  description = `все числа от ${this.start} до ${this.end} включительно`
  
  generateData(): number[] {
    return Array(this.end - this.start + 1).fill('').map((_v, i) => this.start + i)
  }
}

export {
  SequenceSign
}