import shortenText from './shortenText';

test('Shortens HELLO THERE SHORTENED TEXT to HELLO THERE', () => {
  expect(shortenText('HELLO THERE SHORTENED TEXT', 15)).toBe('HELLO THERE');
});
