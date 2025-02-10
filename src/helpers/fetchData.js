import { 
  API_KEY, 
  API_BASE_URL, 
  API_FILTERS
} from '../constants.js';
import { responseHandler } from "./responseHandler.js";

export const fetchData = async (input, filter) => {
  const filterUrl = `${API_BASE_URL}/games?${filter}=${input}&exclude_additions=true&${API_KEY}`;
  const gameUrl = `${API_BASE_URL}/games/${input}?${API_KEY}`;

  try {
    if (filter === API_FILTERS.game) {
      const response = await fetch(gameUrl);
      return await responseHandler(response);

    } else if (filter === API_FILTERS.search) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);

    } else if (filter === API_FILTERS.genres) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);

    } else if (filter === API_FILTERS.tags) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);
    
    } else if (filter === API_FILTERS.platforms) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);
    
    } else if (filter === API_FILTERS.stores) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);
    
    } else if (filter === API_FILTERS.developers) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);
    
    } else if (filter === API_FILTERS.publishers) {
      const response = await fetch(filterUrl);
      return await responseHandler(response);
    }
  } catch (error) {
    throw error;
  } 
};