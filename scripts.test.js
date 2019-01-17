const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'fun.com',
  'funny.com',
  'funcopop.com',
  'shingdig.com',
  'funimation'
];

describe('googleSearch', () => {
  it('This is a goofy test', () => {
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('fun', dbMock)).toEqual([
      'fun.com',
      'funny.com',
      'funcopop.com'
    ]);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('it does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
