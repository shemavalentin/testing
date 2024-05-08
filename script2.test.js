const fetch = require('node-fetch');
const swapi = require('./script2');

// Writting the test
it('calls swapi to get people', () => {
	// Using another library to make sure that assertion is working
	expect.assertions(1)
	// When we are returning a promise it's always a must to use return or done to check
	return swapi.getPeople(fetch).then(data => {
		// Writting assertion
		expect(data.count).toEqual(82);
		//done();
	});
});

// Writting the test
it('calls swapi to get people with promise', () => {
	expect.assertions(2)
	return swapi.getPeoplePromise(fetch).then(data => {
		// Writting assertion
		expect(data.count).toEqual(82);
		expect(data.results.length).toBeGreaterThan(5)
		//done();
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