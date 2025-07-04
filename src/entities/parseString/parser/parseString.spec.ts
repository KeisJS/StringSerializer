import { describe, expect, test } from 'vitest'
import { createTestData } from '@/entities/createTestData'
import { parseString } from '@/entities/parseString/parser/parseString.ts'

describe('Test parse string feature', () => {
  const testData = createTestData('forParser')
  
  test.each(testData)('%s -> %s', (serializedString, numbers) => {
    expect(parseString(serializedString)).toEqual(numbers)
  })
})