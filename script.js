const googleDatabase = [
  'cats.com',
  'flowers.com',
  'pictures.com',
  'animals.com',
  'foodpics.com',
  'manfood.com',
  'girlfavoritefood.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
