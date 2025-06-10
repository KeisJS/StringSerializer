import { describe, expect, test } from 'vitest';
import stringSerialize from './stringSerialize.ts';
import createTestData from '../utils/createTestData.ts'

describe('Test String serialize feature', () => {
  const testData = createTestData('forSerialize')
  
  test.each(testData)('%s -> %s', (data, result) => {
    expect(stringSerialize(data)).toBe(result)
  })
})