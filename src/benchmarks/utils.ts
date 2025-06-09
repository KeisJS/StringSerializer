const getFormatSerializedData = (source: string, serialized: string) => {
  return `${Math.round((serialized.length) / source.length * 100)}%`
}

export {
  getFormatSerializedData
}