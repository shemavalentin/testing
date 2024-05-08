const googleDatabase = [
'cats.com',
'souprecipes.com',
'flowers.com',
'animals.com',
'catpictures.com',
'myfavoritecats.com'
	]

// Now to make it reusable let's use something called Dependancy Injection
// which is easy to do. We pass the function the 2nd parameter

const  googleSearch = (searchInput, db) => {
	const matches = db.filter(website => {
		return website.includes(searchInput);
	});

	return matches.length >3 ?matches.slice(0,3) : matches;
}

//console.log(googleSearch('cats', googleDatabase));

// Cze this is nodejs we don't have export yet rather we use commonjs to export
// It was possible when we use Javascript or Babel
module.exports = googleSearch;