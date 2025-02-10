import { USER_INTERFACE_ID } from '../constants.js';
import { searchListener } from '../helpers/searchListener.js';
import { createHomeView, updateHomeView } from '../views/homeView.js';

export const initHomePage = (data) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  
  const homePage = createHomeView();
  userInterface.appendChild(homePage);

  updateHomeView(data);
  searchListener();
};

