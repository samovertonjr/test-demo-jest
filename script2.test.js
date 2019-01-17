const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (done) => {
  expect.assertions(2);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});

it('getPeople returns count and returns results', (done) => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  expect.assertions(4);
  swapi.getPeople(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people/');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
