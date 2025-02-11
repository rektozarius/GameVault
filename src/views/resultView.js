import { 
  RESULT_CONTAINER_ID, 
  GAME_ID_ATTR, 
  RESULT_CARD_CLASS 
} from "../constants.js";

/**
 * Creates the result page container
 * Sorts search results by user rating
 * Dynamically creates result cards
 * @param {Array} results
 * @returns {Element}
 */
export const createResultView = (results) => {
  const resultContainer = document.createElement('div');
  resultContainer.id = RESULT_CONTAINER_ID;
  
  results.sort((a, b) => {
    if (a.rating < b.rating) {
      return 1;
    } else if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  })

  results.forEach((result) => {
    const resultCard = document.createElement('div');
    resultCard.setAttribute(GAME_ID_ATTR, result.id);
    resultCard.classList.add(RESULT_CARD_CLASS);

    const resultTitle = document.createElement('div');
    const resultTitleElement = document.createElement('p');
    resultTitleElement.innerText = result.name;
    resultTitle.appendChild(resultTitleElement);

    const resultImg = document.createElement('div');
    const resultImgElement = document.createElement('img');
    resultImgElement.src = result.background_image;
    resultImg.appendChild(resultImgElement);

    const resultRating = document.createElement('div');
    const resultRatingElement = document.createElement('p');
    resultRatingElement.innerText = `User Rating: ⭐${result.rating}`;
    resultRating.appendChild(resultRatingElement);
    
    resultCard.append(resultTitle, resultImg, resultRating);
    resultContainer.appendChild(resultCard);
  });

  return resultContainer;
};