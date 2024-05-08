// Bcse import and export are not yet available in node 
// let's use commonjs to import the library

const fetch  = require('node-fetch');


// Let'use dependancy injection to keep thing simple

const getPeoplePromise = fetch => {
	return fetch('https://swapi.dev/api/people')
	.then(response => response.json())
	.then(data => {
		//console.log(data);
		return {
			count: data.count,
			results: data.results
		}
	});
}

//getPeaple(fetch);

// Since this is returning a promise, let's use async

const getPeople = async(fetch) => {
	const getResult = await fetch('https://swapi.dev/api/people');
	const data = await getResult.json();
	//console.log(data);
	return {
		count: data.count,
		results: data.results
	}
}

getPeople(fetch);

// LEt's export both functions

module.exports = {
	//propert:      value
	// getPeaple : getPeaple,
	// getPeaplePromise: getPeaplePromise

	// In ES6 we can do shorthand

	getPeople,
	getPeoplePromise

}
