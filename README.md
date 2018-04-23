# Sort Test

App for testing performance of different sorting algorithms.

## Brief description

App lets you learn about most important types of sorting and test their big O complexity in real-time.
It fetches short description and parses big O notation from **Wikipedia** as well as calling it's own
**REST API endpoints**, which initializes arrays of different sizes **(10k to 1M elements)** and various stages of
being sorted **(random, 25%, 99,7%, reverse order etc.)**. It lets you also display the result of sorting on charts.

### Prerequisites

If you want to make some changes, first you have to have [node with npm](https://nodejs.org/en/) installed.
Then, you have to install dependencies:

```
npm i
```

### Installation

After cloning this repository, in the project directory, you should run:

```
npm start
```

Then go to your browser of choice and go to the URL below:

```
localhost:3000
```

App should be running in your browser. Give it a try!

## Built With

* [React](https://reactjs.org/) - king of all JS frameworks with [React Router](https://reacttraining.com/react-router/) for routing
* [Chart.js](https://www.chartjs.org/) - Most popular canvas-based charting library for JS
* [Sass](https://sass-lang.com/) - most popular CSS preprocessor
* [Webpack](https://webpack.js.org/) with [Babel](https://babeljs.io/) - bundler and compiler for newest ECMAScript standard
* [Express](https://expressjs.com/) - Web framework for [Node.js](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com/) - Cloud platform which can run Node.js
* [Web Workers](https://www.w3schools.com/html/html5_webworkers.asp) and [Node.js Clusters](https://nodejs.org/api/cluster.html) - JavaScript multi-threading
* [Postman](https://www.getpostman.com/) - API endpoints testing tool
* [Particles.js](https://vincentgarreau.com/particles.js/) - Fancy looking, canvas-based background

## Shoutout to
* [Toptal](https://www.toptal.com/developers/sorting-algorithms) for their outstanding gifs with major sorting algorithms
* [Danilo Woznica](https://github.com/danilowoz/react-content-loader) for those Facebook-like SVG placeholders
