import { describe, expect, test } from 'vitest'
import { createTestData } from '@/pages/root/lib/createTestData'
import { parseString } from '@/pages/root/model/parser/parseString/parser/parseString.ts'

describe('Test parse string feature', () => {
  const testData = createTestData('forParser')
  
  test.each(testData)('%s -> %s', (serializedString, numbers) => {
    expect(parseString(serializedString)).toEqual(numbers)
  })
})