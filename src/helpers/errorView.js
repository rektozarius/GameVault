import { USER_INTERFACE_ID } from "../constants.js";

/**
 * Displays error message
 * @param {Error} error
 */
export const errorView = (error) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  userInterface.innerHTML = String.raw`
    <div id="error-container">
      <div id="error-message">
        <h2>Error</h2>
        <p>An error occurred. Please try again later.<br>${error}</p>
        <button id="return-home" onClick="window.location.reload();">Return Home</button>
      </div>
    </div>
  `;
};