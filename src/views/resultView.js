import { RESULT_CONTAINER_ID, GAME_ID_ATTR, RESULT_CARD_CLASS } from "../constants.js";

/**
 * Create the result page
 * @returns {Element}
 */
export const createResultView = (results) => {
  const resultContainer = document.createElement('div');
  resultContainer.id = RESULT_CONTAINER_ID;

  results.forEach((result) => {
    const resultCard = document.createElement('div');
    resultCard.setAttribute(GAME_ID_ATTR, result.id);
    resultCard.classList.add(RESULT_CARD_CLASS);

    const resultTitle = document.createElement('p');
    resultTitle.innerText = result.name;

    const resultImg = document.createElement('img');
    resultImg.src = result.background_image;

    const resultRating = document.createElement('p');
    resultRating.innerText = `User Rating: ⭐${result.rating}`
    
    resultCard.append(resultTitle, resultImg, resultRating);
    resultContainer.appendChild(resultCard);
  });

  return resultContainer;
};