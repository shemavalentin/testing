const fetch = require('node-fetch');
const swapi = require('./script2');

// Writting the test
it('calls swapi to get people', () => {
	// Using another library to make sure that assertion is working
	expect.assertions(1)
	// When we are returning a promise it's always a must to use return or done to check
	return swapi.getPeople(fetch).then(data => {
		// Writting assertion
		expect(data.count).toEqual(82)
		//done();
	});
});

// Writting the test
it('calls swapi to get people with promise', () => {

	// always use this to test if really this is working
	expect.assertions(2)
	return swapi.getPeoplePromise(fetch).then(data => {
		// Writting our assertions.
		expect(data.count).toEqual(82)
		expect(data.results.length).toBeGreaterThan(5)
	});
});

// To test asynchronus calls we must always test for our assertions()
// by using expect.assertions(number) and write them

// after, user (done) => {
	// callback to check if the promise has been resolved and
// when it is done, the test passes. this (done) callbacke waits
// untill fetch is done.
//}

// We can also simply use return interchangibly to await untill
// the fetch is done.



// CREATING MOCKS
// ================\\

// Whether to wait for asynchronous calls to end fecthing which can 
// slow us down as test functions get bigger and bigger,
// we mock data/ functions.


it('getPeople returns count and resolve',() => {
	const mockFecth = jest.fn()
	.mockReturnValue(Promise.resolve({ 
		json: () => Promise.resolve({
			count: 87,
			results: [0,1,2,3,4,5]
		})
	}))

	// and becouse we are still in async we can use dependancy injection 
	// to inject mockFecth data info our getPeaplePromise and see

	return swapi.getPeoplePromise(mockFecth).then(data => {
		// Always use this tool to make sure that assertion are being called
		expect.assertions(4)
		// Writting assertion 
		expect(mockFecth.mock.calls.length).toBe(1);
		expect(mockFecth).toBeCalledWith('https://swapi.dev/api/people');
		expect(data.count).toEqual(87)
		expect(data.results.length).toBeGreaterThan(5)

	})
})