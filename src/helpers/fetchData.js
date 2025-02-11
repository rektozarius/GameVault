import { 
  API_KEY, 
  API_BASE_URL, 
  API_FILTERS
} from '../constants.js';

/**
 * Calls response handler with an api url based on the filter provided
 * Searches by game title, genre or tag
 * Able to fetch game details and all genres
 * Handles errors
 * @param {String} input
 * @param {String} filter
 * @returns {Object}
 */  
export const fetchData = async (input, filter) => {
  const filterUrl = `${API_BASE_URL}/games?${filter}=${input}&page_size=40&exclude_additions=true&${API_KEY}`;
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

/**
 * Fetches by url and returns a response object
 * Handles errors
 * @param {String} url
 * @returns {Object}
 */  
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