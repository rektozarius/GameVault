import { 
  GAME_CANVAS_ID, 
  GAME_CONTAINER_ID, 
  GAME_DESCRIPTION_ID, 
  GAME_DEVELOPERS_ID, 
  GAME_GENRES_CONTAINER_ID, 
  GAME_TAGS_CONTAINER_ID,
  GAME_INFO_ID, 
  GAME_PLATFORMS_ID, 
  GAME_PUBLISHERS_ID, 
  GAME_STORES_ID, 
  GAME_TITLE_ID 
} from "../constants.js";
import { populateView } from "../helpers/genreTagHandlers.js";

/**
 * Create the game page
 * @returns {Element}
 */
export const createGameView = (game) => {
  const gameContainer = document.createElement('div');
  gameContainer.id = GAME_CONTAINER_ID;
  gameContainer.style.backgroundImage = game.background_image;

  gameContainer.innerHTML = String.raw`
    <div id="${GAME_CANVAS_ID}">
    </div>
    <div id="${GAME_TITLE_ID}">
      <h1>${game.name}</h1>
    </div>
    <div id="${GAME_DESCRIPTION_ID}">
    </div>
    <div id="${GAME_INFO_ID}">
      <div>
        <p>User Rating</p>
        <span>⭐${game.rating}</span>
      </div>
      <div>
        <p>Release Date</p>
        <span>${game.released}</span>
      </div>
      <div>
        <a href="${game.website}" target=”_blank”>Official Website</a>
      </div>
      <div id="${GAME_PLATFORMS_ID}">
        <p>Platforms</p>
      </div>
      <div id="${GAME_STORES_ID}">
        <p>Stores</p>
      </div>
      <div id="${GAME_DEVELOPERS_ID}">
        <p>Developers</p>
      </div>
      <div id="${GAME_PUBLISHERS_ID}">
        <p>Publishers</p>
      </div>
    </div>
    <div id="${GAME_GENRES_CONTAINER_ID}">
      <h2>Genres</h2>
    </div>
    <div id="${GAME_TAGS_CONTAINER_ID}">
      <h2>Tags</h2>
    </div>
  `; 

  return gameContainer;
  };

  export const updateGameView = (game) => {
    const gamePlatforms = document.getElementById(GAME_PLATFORMS_ID);
    game.platforms.forEach((platform) => {
      const element = document.createElement('span');
      element.innerText = platform.platform.name;
      gamePlatforms.appendChild(element);
    });

    const gameStores = document.getElementById(GAME_STORES_ID);
    game.stores.forEach((store) => {
      const element = document.createElement('span');
      element.innerText = store.store.name;
      gameStores.appendChild(element);
    });

    const gameDevelopers = document.getElementById(GAME_DEVELOPERS_ID);
    game.developers.forEach((developer) => {
      const element = document.createElement('span');
      element.innerText = developer.name;
      gameDevelopers.appendChild(element);
    });


    const gamePublishers = document.getElementById(GAME_PUBLISHERS_ID);
    game.publishers.forEach((publisher) => {
      const element = document.createElement('span');
      element.innerText = publisher.name;
      gamePublishers.appendChild(element);
    });

    const gameDescription = document.getElementById(GAME_DESCRIPTION_ID);
    gameDescription.innerHTML = game.description;

    const gameCanvas = document.getElementById(GAME_CANVAS_ID);
    const imageElement = document.createElement('img');
    const imageIndex = Math.floor(Math.random() * game.short_screenshots.length);
    imageElement.src = game.short_screenshots[imageIndex].image;
    gameCanvas.appendChild(imageElement);

    populateView(game.genres, GAME_GENRES_CONTAINER_ID);
    populateView(game.tags, GAME_TAGS_CONTAINER_ID);
  };

