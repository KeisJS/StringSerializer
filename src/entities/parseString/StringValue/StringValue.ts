import { bit4number, codes } from '@/entities/config/constants.ts'

type Params = {
  value: string
}
class StringValue {
  private value: string
  private _offset: number = 0
  
  constructor(params: Params) {
    const { value } = params
    this.value = value
  }
  
  private readConvertedData(length: number) {
    const data = this.value.substring(this._offset, this._offset + length)
    
    this._offset +=  length
    
    return data
  }
  
  public readValue(length: number) {
    const value = this.readConvertedData(length)
    
    if (value.length === 1) {
      return codes.indexOf(value)
    }
    
    const firstPart = codes.indexOf(value[0]).toString(2)
    const secondPart = codes.indexOf(value[1]).toString(2).padStart(bit4number, '0')
    
    return parseInt(`${firstPart}${secondPart}`, 2)
  }
  
  get offset() {
    return this._offset
  }
}

export { StringValue }