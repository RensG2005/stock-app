import abbrNum from './abbreviateNumber';

test('abbreviates number to readable format', () => {
  expect(abbrNum(12340000, 2)).toBe('12.34m');
  expect(abbrNum(1000000000, 0)).toBe('1b');
  expect(abbrNum(1000000000, 0)).toBe('1b');
  expect(abbrNum(12, 1)).toBe('12');
  expect(abbrNum(0, 2)).toBe('0');
  expect(abbrNum(1234, 0)).toBe('1k');
  expect(abbrNum(34567, 2)).toBe('34.57k');
  expect(abbrNum(918395, 1)).toBe('918.4k');
  expect(abbrNum(2134124, 2)).toBe('2.13m');
  expect(abbrNum(47475782130, 2)).toBe('47.48b');
});
