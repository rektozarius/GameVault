import { USER_INTERFACE_ID } from "../constants.js";

export const loadingHandler = () => {
	const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
	userInterface.innerHTML = String.raw`
		<div class="centered">
			<h1>LOADING</h1>
		</div>
	`;
};