import { API_BASE_URL, API_KEY } from '../constants.js';
import { initHomePage } from '../pages/homePage.js';
import { errorView } from './errorView.js';
import { responseHandler } from "./responseHandler.js";

export const fetchAndLoad = async () => {
	try {
		const data = await fetchGenres();
		initHomePage(data.results);
	} catch (error) {
		errorView(error.message);
	}
}

const fetchGenres = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/genres?${API_KEY}`);
		return await responseHandler(response);
	} catch (error) {
		throw error;
	}
}