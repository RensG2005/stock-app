import abbrNum from './abbreviateNumber';

test('abbreviates number to readable format', () => {
  expect(abbrNum(12340000, 2)).toBe('12.34 Million');
  expect(abbrNum(1000000000, 0)).toBe('1 Billion');
  expect(abbrNum(1000000000, 0)).toBe('1 Billion');
  expect(abbrNum(12, 1)).toBe('12');
  expect(abbrNum(0, 2)).toBe('0');
  expect(abbrNum(1234, 0)).toBe('1 Thousand');
  expect(abbrNum(34567, 2)).toBe('34.57 Thousand');
  expect(abbrNum(918395, 1)).toBe('918.4 Thousand');
  expect(abbrNum(2134124, 2)).toBe('2.13 Million');
  expect(abbrNum(47475782130, 2)).toBe('47.48 Billion');
});
