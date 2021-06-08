import { getName } from './ctlab1.js';

describe('getName', () => {
  it('test spot', () => {
    const input = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(input);
    const expected = 'spot';

    expect(actual).toEqual(expected);
  });

  it('test character', () => {
    const input = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const actual = getName(input);
    const expected = 'Aang';

    expect(actual).toEqual(expected);
  });
});
