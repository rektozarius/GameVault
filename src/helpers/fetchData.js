import { 
  API_KEY, 
  API_BASE_URL, 
  API_FILTERS
} from '../constants.js';

export const fetchData = async (input, filter) => {
  const filterUrl = `${API_BASE_URL}/games?${filter}=${input}&exclude_additions=true&${API_KEY}`;
  const gameUrl = `${API_BASE_URL}/games/${input}?${API_KEY}`;
  const genresUrl = `${API_BASE_URL}/genres?${API_KEY}`;

  try {
    if (filter === API_FILTERS.game) {
      return await responseHandler(gameUrl);

    } else if ( ( filter === API_FILTERS.search ) || ( filter === API_FILTERS.genres ) 
      || ( filter === API_FILTERS.tags ) ) {
      return await responseHandler(filterUrl);

    } else if (!input) {
      return await responseHandler(genresUrl);   
    }
  } catch (error) {
    throw error;
  } 
};

const responseHandler = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};