function createTestData(type: 'forSerialize'): [number[], string][];
function createTestData(type: 'forParser'): [string, number[]][];
function createTestData(type: 'forSerialize' | 'forParser'): [number[], string][] | [string, number[]][] {
  const testData: [number[], string][] = [
    [[1, 15, 35], 'ADBPjAAAAAA'],
    [[101, 150, 299], 'AAADBlCWErAAAA'],
    [[1, 1, 1, 3, 3, 3, 3], 'AAAAACBADDAEAA'],
    [[101, 101, 299, 299], 'AAAAAAACBlACErAC'],
    [[3, 1, 1, 299, 299], 'ABDAAABBACABErAC']
  ]
  
  return type === 'forSerialize' ? testData : testData.map(([ numbers, serialized]) => [serialized, numbers])
}

export default createTestData