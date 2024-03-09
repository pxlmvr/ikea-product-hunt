import { describe, expect, test } from 'vitest'
import { mergeClasses } from './mergeClasses'

describe('mergeClasses()', () => {
  test('Adds two classes together', () => {
    expect(mergeClasses(['classA', 'classB'])).toBe('classA classB')
  })

  test('If only one class is passed return it', () => {
    expect(mergeClasses(['classA'])).toBe('classA')
  })

  test('If no class is passed return empty string', () => {
    expect(mergeClasses([])).toBe('')
  })
})
