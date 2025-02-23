import { pluralize } from '@/app/utils/strings';
import { describe, test, expect } from '@jest/globals';

describe('pluralize', () => {
  test('should return singular form', () => {
    expect(pluralize(1, ['яблоко', 'яблока', 'яблок'])).toBe('яблоко');
    expect(pluralize(21, ['яблоко', 'яблока', 'яблок'])).toBe('яблоко');
  });

  test('should return plural form for 2-4', () => {
    expect(pluralize(2, ['яблоко', 'яблока', 'яблок'])).toBe('яблока');
    expect(pluralize(4, ['яблоко', 'яблока', 'яблок'])).toBe('яблока');
  });

  test('should return plural form for 5 and more', () => {
    expect(pluralize(5, ['яблоко', 'яблока', 'яблок'])).toBe('яблок');
    expect(pluralize(11, ['яблоко', 'яблока', 'яблок'])).toBe('яблок');
    expect(pluralize(100, ['яблоко', 'яблока', 'яблок'])).toBe('яблок');
  });
});
