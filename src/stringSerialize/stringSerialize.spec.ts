import { describe, expect, test } from 'vitest';
import stringSerialize from './stringSerialize.ts';

describe('Test String serialize feature', () => {
  const testData: [number[], string][] = [
    [[1, 15, 35], 'ADBPj'],
  ]
  
  test.each(testData)('%s -> %s', (data, result) => {
    expect(stringSerialize(data)).toBe(result)
  })
})