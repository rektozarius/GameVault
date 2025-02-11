import { USER_INTERFACE_ID } from "../constants.js";

export const loadingView = () => {
	const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
	userInterface.innerHTML = String.raw`
		<div id="loading-container">
  		<div id="loading-circle"></div>
		</div>
	`;
};