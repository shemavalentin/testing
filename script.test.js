// Import in Node

const googleSearch = require('./script');

// What if we need to test the db? we can't export db and inport in here. it's very slow, and expeinsive.
// We need to mock it up

dbMock = [
	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com'
	]

// Here I can group all those tests

describe('googleSearch', () => {
	//Test with jest starts with it() and most likely all tools have this method
// It takes two parameters:  a string, and a function that needs to run.

it('is a silly test', () => {
	expect('hello').toBe('hello');
	
});

it(' is searching google', () => {
	expect(googleSearch('testtest', dbMock)).toEqual([])

	expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
});

it('work with undefined and null input', ()=> {
	expect(googleSearch(undefined, dbMock)).toEqual([]);

	expect(googleSearch(null, dbMock)).toEqual([]);
});

it('does not return more than 3 matches', () => {
	expect(googleSearch('.com', dbMock).length).toEqual(3);
})

})

