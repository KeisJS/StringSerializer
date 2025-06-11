import stringSerialize from '../stringSerialize/stringSerialize.ts'

type BenchmarkParams = {
  length?: number
  start?: number
  end?: number
}

abstract class Benchmark {
  public data: number[]
  public source: string
  public serialized: string
  public description = ''
  public start
  public end
  public length
  
  constructor(params: BenchmarkParams = {} as BenchmarkParams) {
    const { length, start, end } = { ...{
      length: 0,
      start: 1,
      end: 300
    }, ...params }
    this.end = end
    this.start = start
    this.length = length
    this.data = this.generateData()
    this.source = JSON.stringify(this.data)
    this.serialized = stringSerialize(this.data)
  }
  
  abstract generateData(): number[]
  
  public get serializeData() {
    return `${Math.round((this.serialized.length) / this.source.length * 100)}`
  }
}

export default Benchmark