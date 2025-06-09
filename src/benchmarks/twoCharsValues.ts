import stringSerialize from '../stringSerialize/stringSerialize.ts';
import { getFormatSerializedData } from './utils.ts';

const twoCharsValues = () => {
  const description = 'числа в 2 символа'
  const data = Array(10).fill('').map((_v, index) => 100 + index)
  const source = JSON.stringify(data)
  const serialized = stringSerialize(data)
  const serializeData = getFormatSerializedData(source, serialized)
  
  return {
    description,
    data,
    source,
    serialized,
    serializeData
  }
}

export {
  twoCharsValues
}