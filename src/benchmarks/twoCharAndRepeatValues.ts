import stringSerialize from '../stringSerialize/stringSerialize.ts';
import { getFormatSerializedData } from './utils.ts';

const twoCharAndRepeatValues = () => {
  const description = 'числа два знака с повторением'
  const data = Array(10).fill('').map((_v, index) => 200 + index % 10)
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
  twoCharAndRepeatValues
}