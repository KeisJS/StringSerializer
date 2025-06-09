import { describe, expect, test } from 'vitest';
import stringSerialize from './stringSerialize.ts';

describe('Test String serialize feature', () => {
  const testData: [number[], string][] = [
    [[1, 15, 35], 'ADBPjAAAAAA'],
    [[101, 150, 299], 'AAADBlCWErAAAA'],
    [[1, 1, 1, 3, 3, 3, 3], 'AAAAACBADDAEAA'],
    [[101, 101, 299, 299], 'AAAAAAACBlACErAC'],
    [[1, 1, 299, 299, 3], 'ABDAAABBACABErAC']
  ]
  
  test.each(testData)('%s -> %s', (data, result) => {
    expect(stringSerialize(data)).toBe(result)
  })
})