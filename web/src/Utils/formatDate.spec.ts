import { getFullDateString } from './formatDate';

describe('formatDate', () => {
  test('it should get full date string', () => {
    const result = getFullDateString('2020-01-01T00:00:00.000Z');
    expect(result).toBe('January 1, 2020, 07:00');
  });
  test('In case of invalid date/time, it should get empty string.', () => {
    const result = getFullDateString('invalid-date');
    expect(result).toBe('');
  });
  test('In case of undefined, it should get empty string.', () => {
    const result = getFullDateString(undefined);
    expect(result).toBe('');
  });
});
