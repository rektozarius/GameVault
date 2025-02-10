export const cacheGameData = (gameData, gameDetails) => {
  const {
    id,
    background_image,
    name,
    short_screenshots,
    released,
    rating,
    esrb_rating,
    platforms,
    genres,
    tags
  } = gameData;

  const {
    website,
    stores,
    publishers,
    developers,
    description_raw,
  } = gameDetails;

  const cachedData = {
    id,
    background_image,
    name,
    short_screenshots,
    rating,
    esrb_rating,
    description_raw,
    genres,
    tags,
    game_info: [
      {
          name: 'Release Date',
          value: released
      },
      {
          name: 'Platforms',
          value: platforms
      },
      {
          name: 'Official Website',
          value: website
      },
      {
          name: 'Stores',
          value: stores
      },
      {
          name: 'Publishers',
          value: publishers
      },
      {
          name: 'Developers',
          value: developers
      }
    ]
  };

  sessionStorage.setItem(cachedData.id, JSON.stringify(cachedData));
  return cachedData;
};