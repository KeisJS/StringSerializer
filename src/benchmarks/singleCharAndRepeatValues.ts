import stringSerialize from '../stringSerialize/stringSerialize.ts';
import { getFormatSerializedData } from './utils.ts';

const singleCharAndRepeatValues = () => {
  const description = 'числа одного знака с повторением'
  const data = Array(20).fill('').map((_v, index) => index % 3 + 1)
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
  singleCharAndRepeatValues
}