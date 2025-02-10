/**
 * Create the game page
 * @returns {Element}
 */
export const createGameView = (gameData) => {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';
    gameContainer.style.backgroundImage = gameData.background_image;
  
    const backgroundImage = document.createElement('img');
    backgroundImage.id = 'background-image';
    backgroundImage.src = gameData.background_image;


    const gameTitle = document.createElement('div');
    gameTitle.id = 'game-title';
    const title = document.createElement('h1');
    title.innerText = gameData.name;
    gameTitle.appendChild(title);

    
    const gameCanvas = document.createElement('div');
    gameCanvas.id = 'image-canvas';
    const screenshot = document.createElement('img');
    screenshot.src = gameData.short_screenshots[1].image;
    gameCanvas.appendChild(screenshot);

    
    const gameDescription = document.createElement('div');
    gameDescription.id = 'game-description';
    gameDescription.innerHTML = gameData.description_raw;


    const gameInfo = document.createElement('div');
    gameInfo.id = 'game-info';
    const infoList = document.createElement('ul');
    
    gameData.game_info.forEach((item) => {
      const info = document.createElement('li');
      info.innerText = `${item.name}  ${item.value}`
      infoList.appendChild(info);
    });
    gameInfo.appendChild(infoList);

    gameContainer.append(
      backgroundImage, gameTitle, gameCanvas, gameDescription, infoList
    );

  
    return gameContainer;
  };
  

/* game search
background_image: url string
esrb_rating: { name_en: string }
genres: [ {name: string} ]
name: title string
metacritic: number
platforms: [ {platform: { name: string } } ]
released: date string
short_screenshots: [ { image: url string } ]
tags: [ { language: eng, name: string } ]

game details
website: url string
stores: [ { store: { domain: url string, name: string } } ]
reddit_url: url string
publishers: [ { name: string } ]
developers: [ { name: string } ]
description_raw: string



optional
ratings star system
*/

