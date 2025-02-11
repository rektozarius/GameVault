/**
 * Destructures relevant properties from game search object and game details object
 * Filters the tags by language
 * Saves game object to sessionStorage
 * @param {Object} gameData
 * @param {Object} gameDetails
 * @returns {Object}
 */
export const cacheGameData = (gameData, gameDetails) => {
  let {
    id,
    background_image,
    name,
    short_screenshots,
    released,
    rating,
    platforms,
    tags,
    genres
  } = gameData;

  tags = tags.filter((tag) => (tag.language === 'eng'));

  let {
    website,
    stores,
    publishers,
    developers,
    description,
  } = gameDetails;

  const cachedData = {
    id,
    background_image,
    name,
    short_screenshots,
    rating,
    description,
    genres,
    tags,
    released,
    platforms,
    website,
    stores,
    publishers,
    developers
  };

  sessionStorage.setItem(cachedData.id, JSON.stringify(cachedData));
  return cachedData;
};