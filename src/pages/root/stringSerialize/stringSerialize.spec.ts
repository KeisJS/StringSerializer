import { describe, expect, test } from 'vitest';
import { createTestData } from '@/entities/createTestData'
import { stringSerialize } from '@/pages/root/stringSerialize/stringSerialize.ts'

describe('Test String serialize feature', () => {
  const testData = createTestData('forSerialize')
  
  test.each(testData)('%s -> %s', (data, result) => {
    expect(stringSerialize(data)).toBe(result)
  })
})