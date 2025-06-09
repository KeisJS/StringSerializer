import { describe, expect, test } from 'vitest'
import createTestData from '../utils/createTestData.ts'
import parseString from './parseString.ts'

describe('Test parse string feature', () => {
  const testData = createTestData('forParser')
  
  test.each(testData)('%s -> %s', (serializedString, numbers) => {
    expect(parseString(serializedString)).toEqual(numbers)
  })
})