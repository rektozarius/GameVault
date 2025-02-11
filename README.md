# GameVault App

GameVault is a web application designed for gamers who want to explore detailed information about their favorite video games. By leveraging the [RAWG API](https://rawg.io/apidocs), GameVault allows users to search for games, view comprehensive details, and discover trending titles.

## Design

GameVault mimics the color/brand [palette](https://discord.com/branding) of Discord App.

## Usage

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Project Tree

```bash
│   index.html
│
├───public
│       home.png
│       icon.png
│       style.css
│
└───src
    │   app.js
    │   constants.js
    │
    ├───helpers
    │       cacheGameData.js
    │       errorView.js
    │       fetchData.js
    │       genreTagHandlers.js
    │       loadingView.js
    │
    ├───pages
    │       gamePage.js
    │       homePage.js
    │       resultPage.js
    │
    └───views
            gameView.js
            homeView.js
            resultView.js
```

## Screenshots

![Screenshot](./assets/homePage.png?raw=true "Home Page")

![Screenshot](./assets/resultPage.png?raw=true "Result Page")

![Screenshot](./assets/gamePage.png?raw=true "Game Page")