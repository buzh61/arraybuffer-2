import ArrayBufferConverter from '../src/js/ArrayBufferConverter';
import getBuffer from '../src/js/getBuffer';

test('ArrayBufferConverter возвращает строку', () => {
  const stringCase = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe(stringCase);
});
