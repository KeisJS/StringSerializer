import stringSerialize from '../stringSerialize/stringSerialize.ts';
import { getFormatSerializedData } from './utils.ts';

const singleSignValues = () => {
  const description = 'числа одного знака'
  const data = Array(10).fill('').map((_v, index) => index % 10)
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
  singleSignValues
}