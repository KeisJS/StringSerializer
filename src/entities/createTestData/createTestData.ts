type SerializeData = [number[], string]
type ParseData = [string, number[]]

function createTestData(type: 'forSerialize'): SerializeData[];
function createTestData(type: 'forParser'): ParseData[];
function createTestData(type: 'forSerialize' | 'forParser'): SerializeData[] | ParseData[] {
  const testData: SerializeData[] = [
    [[1, 15, 35], 'ADBPjAAAAAA'],
    [[101, 150, 299], 'AAADBlCWErAAAA'],
    [[1, 1, 1, 3, 3, 3, 3], 'AAAAACBADDAEAA'],
    [[101, 101, 299, 299], 'AAAAAAACBlACErAC'],
    [[3, 1, 1, 299, 299], 'ABDAAABBACABErAC']
  ]
  
  return type === 'forSerialize' ? testData : testData.map(([ numbers, serialized]) => [serialized, numbers])
}

export {
  createTestData
}