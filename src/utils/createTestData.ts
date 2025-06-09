function createTestData(type: 'forSerialise'): [number[], string][];
function createTestData(type: 'forParser'): [string, number[]][];
function createTestData(type: 'forSerialise' | 'forParser'): [number[], string][] | [string, number[]][] {
  const testData: [number[], string][] = [
    [[1, 15, 35], 'ADBPjAAAAAA'],
    [[101, 150, 299], 'AAADBlCWErAAAA'],
    [[1, 1, 1, 3, 3, 3, 3], 'AAAAACBADDAEAA'],
    [[101, 101, 299, 299], 'AAAAAAACBlACErAC'],
    [[1, 1, 299, 299, 3], 'ABDAAABBACABErAC']
  ]
  
  return type === 'forSerialise' ? testData : testData.map(([ numbers, serialized]) => [serialized, numbers])
}

export default createTestData