module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/resume.css
var resume = __webpack_require__("wQ99");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./reducers/resume-reducer.js
/* harmony default export */ var resume_reducer = (function () {
  return {
    jobs: [{
      company: "Health Care Service Corportaion (BCBS)",
      type: "Software Engineer (Test)",
      roll: "Associate",
      location: "Chicago, Illinois",
      time: "Summer - Present Day",
      whathappened: ["Write and manage automated testing scripts for the BCBSIL Android app using Java, Selenium and Maven ", "Leading the refactoring efforts to clean up the mobile app testing framework (both Android and iOS)", "Created a slew of new reusable helper functions for the team to use when scripting automated test cases ", "Help create the user stories for both the manual and automated test cases "],
      link: "https://play.google.com/store/apps/details?id=com.hcsc.android.providerfinderil&hl=en_US&gl=US"
    }, {
      company: "FoodBoss",
      type: "Software Engineer",
      roll: "Intern",
      location: "Chicago, Illinois",
      time: "Winter - Spring 2020",
      whathappened: ["Built home page, static pages, redesigned the search page using Redux, React and NextJS", "Refactored and restyled React components with modern ES6 syntax, SCSS and Redux React", "Added Selenium tests, with a chrome driver, to our codebase to test pull requests when they get created, so we can automatically validate them before merging into staging or production", "Implemented a Pull Request template to our Github repository to help organize and abstract new Pull Requests"],
      link: "https://www.foodboss.com/"
    }, {
      company: "Anixter International Inc",
      type: "Intern",
      roll: "Information Services Development Program",
      location: "Chicago, Illinois",
      time: "Summer 2019",
      whathappened: ["Built an Electron desktop application to function as an interactive catalog for Project Managers and Sales Reps to aggregate through a database of shipping labels. ", "Created a database of 1000+ active shipping labels with corresponding web app to maintain it.", "Wrote scripts to calculate the estimated shipping cost for packages sent from a warehouse in New South Wales, Australia"],
      link: "none"
    }, {
      company: "Chicago Transit Authority",
      type: "Software Development Intern",
      roll: "Transit Operations",
      location: "Chicago, Illinois",
      time: "Winter/Spring 2018 & Summer 2018",
      whathappened: ["Recreated a 10 year old web portal from the ground up using ASP.NET MVC", "Added new functionality to shelter/bus sign maintenance program, enabling maintenance workers to handle repairs quicker and easier", "Wrote a documentation manual for the CTA Train Tracker", "Created a program to digitize Terminal Log sheets. Employees would previously record data on paper for someone else to manually update a spreadsheet after their shift; my program takes care of all that in one go. When an employee fills out the form, it automatically populates the database"],
      link: "none"
    }, {
      company: "Illinois Tool Works",
      type: "Computer Science Intern",
      roll: "Innovation Center",
      location: "Glenview, Illinois",
      time: "Summer 2017",
      whathappened: ["Created and updated pages to the ITW Innovation Center Sharepoint websites", "Wrote scripts tracking online data for various ITW branches. The scripts automatically run every 2 weeks to collect tweets, blog posts, YouTube videos and whatever other online content that mentions the specific company/products", "Programmed a Sawyer robot to flip burgers and/or pancakes for a live demo to show on tours of the ITW headquarters"],
      link: "https://www.youtube.com/watch?v=6arNqddjC6M"
    }],
    additionalIndustryExperience: [{
      company: "Futhead",
      type: "Volunteer",
      roll: "Moderator",
      location: "Huntsville, Alabama",
      time: "Fall 2015 - Present Day",
      whathappened: ["Maintain and monitor a large online Fifa Ultimate Team community (over 1 million unique users and 80 mil unique visitors)", "Provide feedback for the owner and lead developers to help with upkeep, testing and production of new features", "Learned about what it takes to run a forum/database website, including the various social media aspects"],
      link: "https://www.futhead.com/"
    }, {
      company: "Inspect All Home Inspections Inc",
      type: "Web Developer",
      roll: "Freelance",
      location: "Chicago, Illinois",
      time: "Fall 2020",
      whathappened: ["TBD"],
      link: "none"
    }],
    relevantCoursework: ["Data Structures 1 & 2", "Software Projects for Community Clients", "Advanced Application Development 1 & 2", "Server-Side Web Development", "Data Analysis", "App Development Framework", "Human Computer Interaction", "Computer Systems"],
    projects: [{
      name: "This",
      description: "I made this website",
      link: "/"
    }, {
      name: "Shitty Dating",
      description: "TBA",
      link: "TBD"
    }, {
      name: "Beer",
      description: "An indepth, statistical and scientific analysis of all the different kinds of beer I've sampled over the years",
      link: "beer"
    }, {
      name: "Pokemon TCG Card Price Aggregator",
      description: "I'm currently working on a project to scrape TCG Player, Ebay and Troll & Toad to check, track and compare prices for Pokemon cards",
      link: "TBD"
    }, {
      name: "Tic Tac Toe",
      description: "I created a tic tac toe game in React Redux to server as a potential interview project for FoodBoss",
      link: "https://dipaolo-react-redux-ttt.herokuapp.com/"
    }, {
      name: "Is it Rotating? Pokemon TCG 2019-2020",
      description: "I created a tool read from the Pokemon TCGO API and check to see which cards are leaving the format come the 2019 rotation",
      link: "https://notmichaelsgithub.github.io/is_it_rotating/"
    }, {
      name: "Wogwon's FIFA IG Stat Calculator",
      description: "A web app using the legendary Futheader Wogwon's card stat algorithm. This was the first javascript project I made back in high school and I'll love it forever",
      link: "https://notmichaelsgithub.github.io/wogwoncalc/"
    }, {
      name: "My Code Pen account",
      description: "I toss up cool/useful blocks of code here that don't warrant a whole project based around them",
      link: "https://codepen.io/NotMichael/pens/"
    }],
    sports: [{
      name: "DePaul Men's Club Volleyball",
      position: "Libero",
      time: "2016 - 2020",
      accolades: ["1st Place Men's AA Gold @ MIVAs 16-17", "3rd Place Men's AA Gold @ Nationals 16-17", "15th Place Men's A Gold @ Nationals 17-18", "1st Place Men's A Silver @ Nationals 18-19"]
    }, {
      name: "DePaul Men's Club Soccer",
      position: "Defensive Mid",
      time: "2017 - 2020",
      accolades: ["We tried"]
    }, {
      name: "Di Paolo FC",
      position: "Defensive Mid / Right Wingback",
      time: "2019 - Present Day",
      accolades: ["1st Place Advanced Co-Ed 7v7 @ CFRS Summer Session 2019"]
    }, {
      name: "Competitive Pokemon",
      position: "Senior",
      time: "1998 - Present Day",
      accolades: ["17th Place Madison VGC Regional - 2018", "1st Place Wednesday Night Standard TCG Tournament @ Near Mint Games 7/3/19"]
    }],
    languages: [{
      name: "English",
      level: "Fluent",
      years: "21 years"
    }, {
      name: "Japanese",
      level: "Beginner",
      years: "1 year"
    }]
  };
});
// CONCATENATED MODULE: ./reducers/kits-reducer.js
/* harmony default export */ var kits_reducer = (function () {
  return {
    allkits: [{
      name: 'DePaul Men\'s Club Volleyball',
      season: '2018-2019 ',
      sport: 'Volleyball',
      edition: 'Home',
      description: 'Inspired by the Chicago White Sox',
      link: 'https://i.imgur.com/RVdQdr9.jpg'
    }, {
      name: 'DePaul Men\'s Club Volleyball',
      season: '2018-2019',
      sport: 'Volleyball',
      edition: 'Away',
      description: 'Inspired by the Chicago Cubs',
      link: 'https://i.imgur.com/xgdrvc7.jpg'
    }, {
      name: 'DePaul Men\'s Club Soccer',
      season: '2019-2020',
      sport: 'Soccer',
      edition: 'Home',
      description: 'Inspired by Gremio',
      link: 'https://i.imgur.com/WYlxP1G.jpg'
    }, {
      name: 'DePaul Men\'s Club Soccer',
      season: '2017-2018',
      sport: 'Volleyball',
      edition: 'Home & Away',
      description: '',
      link: 'https://i.imgur.com/eiWEEFe.png'
    }]
  };
});
// CONCATENATED MODULE: ./reducers/accomplishments-reducer.js
/* harmony default export */ var accomplishments_reducer = (function () {
  return {
    accomplishments: [{
      name: 'Mivas AA Gold 1st Place',
      link: 'https://i.imgur.com/v8z79OW.jpg',
      team: 'DePaul Men\'s Club Volleyball',
      time: '2016-2017',
      blurb: ''
    }, {
      name: '2019 CFRS Advanced Coed 7v7 Champions',
      link: 'https://i.imgur.com/TrP3NzB.jpg',
      team: 'Di Paolo FC',
      time: 'Summer 2019',
      blurb: ''
    }, {
      name: 'DePaul Google Day (2019) Challenge 1st Place',
      link: 'https://i.imgur.com/EByPw2l.jpg',
      team: 'Froyo',
      time: 'Spring 2019',
      blurb: ''
    }, {
      name: 'DePaul Fall Advanced Intramural Volleyball 1st Place',
      link: 'https://i.imgur.com/SMqTI1M.jpg',
      team: 'Karasuno Black Crows',
      time: 'Fall 2019',
      blurb: ''
    }]
  };
});
// CONCATENATED MODULE: ./reducers/GameState.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
  turn: 0,
  players: 2,
  gameOver: false,
  xWins: 0,
  oWins: 0,
  whosTurn: 'X'
};
/* harmony default export */ var GameState = (function (state = initialState, action) {
  switch (action.type) {
    case 'MAKE_MOVE':
      if (state.gameOver === true) {
        return state;
      }

      const newBoard = state.board;

      if (newBoard[action.location.x][action.location.y] !== ' ') {
        return state;
      }

      if (state.turn % 2 === 0) {
        newBoard[action.location.x][action.location.y] = 'X';
        return makeMove(state, newBoard, 'X');
      }

      newBoard[action.location.x][action.location.y] = '0';
      return makeMove(state, newBoard, '0');

    case 'DEBUG_INCREMENT_TURN':
      return _objectSpread(_objectSpread({}, state), {}, {
        turn: state.turn + 1
      });

    default:
      return state;
  }
});

function makeMove(state, newBoard, player) {
  let score = state.xWins;
  let gameOver = state.gameOver;

  if (check(newBoard, player) === true) {
    score += 1;
    gameOver = true;
  }

  if (state.whosTurn === 'X') {
    state.whosTurn = '0';
  } else {
    state.whosTurn = 'X';
  }

  if (player === 'X') {
    return _objectSpread(_objectSpread({}, state), {}, {
      turn: state.turn + 1,
      board: newBoard,
      gameOver: gameOver,
      xWins: score
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    turn: state.turn + 1,
    board: newBoard,
    gameOver: gameOver,
    oWins: score
  });
}

function check(board, player) {
  //check x 
  for (let x = 0; x < 3; x++) {
    if (board[x][0] === player && board[x][1] === player && board[x][2] === player) {
      console.log('game over');
      console.log(player + ' wins!');
      return true;
    }
  } //check y


  for (let y = 0; y < 3; y++) {
    if (board[0][y] === player && board[1][y] === player && board[2][y] === player) {
      console.log('game over');
      console.log(player + ' wins!');
      return true;
    }
  } //diagnal 1


  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    console.log('game over');
    console.log(player + ' wins!');
    return true;
  } //diagnal 2


  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    console.log('game over!');
    console.log(player + ' wins!');
    return true;
  } //if nothing 


  return false;
}
// CONCATENATED MODULE: ./reducers/beer-reducer.js
/* harmony default export */ var beer_reducer = (function () {
  return [{
    name: 'Asahi Super Dry',
    type: 'Lager',
    country: 'Japan',
    state: '',
    abv: 5.0
  }, {
    name: 'Sapporo Premium',
    type: 'Lager',
    country: 'Japan',
    state: '',
    abv: 4.9
  }, {
    name: 'Tecate',
    type: 'Lager',
    country: 'Mexico',
    state: '',
    abv: 4.5
  }, {
    name: 'Magner\'s',
    type: 'Hard Cider',
    country: 'Ireland',
    state: '',
    abv: 4.5
  }, {
    name: 'Dogfish Head SeaQuench',
    type: 'Sour Ale',
    country: 'USA',
    state: 'Delaware',
    abv: ''
  }, {
    name: '2 Towns Ciderhouse Pacific Pineapple',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Oregon',
    abv: 5.0
  }, {
    name: '2 Towns Ciderhouse Ginja Ninja',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Oregon',
    abv: 6.0
  }, {
    name: '2 Towns Ciderhouse Hard Apple Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Oregon',
    abv: 6.0
  }, {
    name: 'New Belgium Fat Tire',
    type: 'Amber Ale',
    country: 'USA',
    state: 'Colorado',
    abv: 5.2
  }, {
    name: 'Blue Moon',
    type: 'Wheat Beer',
    country: 'USA',
    state: 'Colorado',
    abv: 5.4
  }, {
    name: 'Goose Island Green Line',
    type: 'APA',
    country: 'USA',
    state: 'Illinois',
    abv: 5.4
  }, {
    name: 'Ace Perry',
    type: 'Hard Cider',
    country: 'USA',
    state: 'California',
    abv: 5.0
  }, {
    name: 'Right Bee Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Illinois',
    abv: 6
  }, {
    name: 'Goose Island 312 Urban Wheat',
    type: 'Wheat Beer',
    country: 'USA',
    state: 'Illinois',
    abv: 4.2
  }, {
    name: 'Leinenkugel\'s Summer Shandy',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Wisconsin',
    abv: 4.2
  }, {
    name: 'Burnt City Facemelter',
    type: 'IPA',
    country: 'USA',
    state: 'Illinois',
    abv: 7.0
  }, {
    name: 'Maui Pineapple Mana',
    type: 'Wheat Beer',
    country: 'USA',
    state: 'Hawaii',
    abv: 5.5
  }, {
    name: 'Virtue Rose',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Michigan',
    abv: 6.7
  }, {
    name: 'Bavik Super Pils',
    type: 'Pilsner',
    country: 'Belgium',
    state: '',
    abv: 5.2
  }, {
    name: 'Rekorderlig Passionfruit',
    type: 'Hard Cider',
    country: 'Sweden',
    state: '',
    abv: 4.5
  }, {
    name: 'Owl\'s Brew Radler Wicked Watermelon',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'New York',
    abv: 3.8
  }, {
    name: 'New Holland Dragon\'s Milk',
    type: 'Stout',
    country: 'USA',
    state: 'Michigan',
    abv: 11.0
  }, {
    name: 'Krombacher Pils',
    type: 'Pilsner',
    country: 'Germany',
    state: '',
    abv: 4.8
  }, {
    name: 'Amstel Light',
    type: 'Lager',
    country: 'Holland',
    state: '',
    abv: 3.5
  }, {
    name: 'Surly Furious',
    type: 'IPA',
    country: 'USA',
    state: 'Minnesota',
    abv: 6.7
  }, {
    name: 'Original Sin Black Widow',
    type: 'Hard Cider',
    country: 'USA',
    state: 'New York',
    abv: 6.0
  }, {
    name: 'Forbidden Root Strawberry Basil',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Illinois',
    abv: 5.0
  }, {
    name: 'Carlsberg',
    type: 'Lager',
    country: 'Denmark',
    state: '',
    abv: 5.0
  }, {
    name: 'Labatt Blue',
    type: 'Pilsner',
    country: 'Canada',
    state: '',
    abv: 4.7
  }, {
    name: 'Corona Extra',
    type: 'Lager',
    country: 'Mexico',
    state: '',
    abv: 4.5
  }, {
    name: 'Modelo Especial',
    type: 'Lager',
    country: 'Mexico',
    state: '',
    abv: 4.4
  }, {
    name: 'Negra Modelo',
    type: 'Lager',
    country: 'Mexico',
    state: '',
    abv: 5.4
  }, {
    name: 'Guinness Draught',
    type: 'Stout',
    country: 'Ireland',
    state: '',
    abv: 4.2
  }, {
    name: 'Shock Top Belgian White',
    type: 'Wheat Beer',
    country: 'USA',
    state: 'Missouri',
    abv: 5.4
  }, {
    name: 'Michelob ULTRA',
    type: 'Lager',
    country: 'USA',
    state: 'Missouri',
    abv: 4.2
  }, {
    name: 'Heineken',
    type: 'Lager',
    country: 'Holland',
    state: '',
    abv: 5.0
  }, {
    name: 'Ballast Point Grapefruit Sculpin',
    type: 'IPA',
    country: 'USA',
    state: 'California',
    abv: 7.0
  }, {
    name: 'Ballast Point Sour Wench',
    type: 'Sour Ale',
    country: 'USA',
    state: 'California',
    abv: 7.0
  }, {
    name: 'Dos Equis Lager',
    type: 'Pilsner',
    country: 'Mexico',
    state: '',
    abv: 4.2
  }, {
    name: 'Bohemia',
    type: 'Pilsner',
    country: 'Mexico',
    state: '',
    abv: 4.7
  }, {
    name: 'Pabst Blue Ribbon',
    type: 'Lager',
    country: 'USA',
    state: 'Wisconsin',
    abv: 4.74
  }, {
    name: 'Coors Light',
    type: 'Lager',
    country: 'USA',
    state: 'Colorado',
    abv: 4.2
  }, {
    name: 'Rolling Rock',
    type: 'Lager',
    country: 'USA',
    state: 'Missouri',
    abv: 4.4
  }, {
    name: 'Kirin Ichiban',
    type: 'Lager',
    country: 'Japan',
    state: '',
    abv: 5.0
  }, {
    name: 'Sapporo Black',
    type: 'Lager',
    country: 'Japan',
    state: '',
    abv: 5.0
  }, {
    name: 'Lucky Buddha Enlightened Beer',
    type: 'Lager',
    country: 'Australia',
    state: '',
    abv: 4.8
  }, {
    name: 'Kloud Original Gravity',
    type: 'Pilsner',
    country: 'South Korea',
    state: '',
    abv: 5.0
  }, {
    name: 'Tsingtao Beer',
    type: 'Lager',
    country: 'China',
    state: '',
    abv: 4.0
  }, {
    name: 'Beck\'s',
    type: 'Pilsner',
    country: 'Germany',
    state: '',
    abv: 5.0
  }, {
    name: 'Almaza Pilsner Beer',
    type: 'Pilsner',
    country: 'Lebanon',
    state: '',
    abv: 4.2
  }, {
    name: 'Stiegl Grapefruit Radler',
    type: 'Fruit Beer',
    country: 'Austria',
    state: '',
    abv: 2.5
  }, {
    name: 'Stiegl Pils',
    type: 'Lager',
    country: 'Austria',
    state: '',
    abv: 4.9
  }, {
    name: 'Strongbow Gold Apple',
    type: 'Hard Cider',
    country: 'England',
    state: '',
    abv: 5.0
  }, {
    name: 'Stella Artois',
    type: 'Pilsner',
    country: 'Belgium',
    state: '',
    abv: 5.0
  }, {
    name: 'Stella Artois Cidre',
    type: 'Hard Cider',
    country: 'Belgium',
    state: '',
    abv: 4.5
  }, {
    name: 'JK\'s The Pair Perry Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Michigan',
    abv: 5.5
  }, {
    name: 'Brooklyn Lager',
    type: 'Lager',
    country: 'USA',
    state: 'New York',
    abv: 5.2
  }, {
    name: 'Peroni Nastro Azzurro',
    type: 'Lager',
    country: 'Italy',
    state: '',
    abv: 5.1
  }, {
    name: 'Starcut Mosa',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Michigan',
    abv: 4.3
  }, {
    name: 'Goose Island Soleil',
    type: 'Saison',
    country: 'USA',
    state: 'Illinois',
    abv: 5.5
  }, {
    name: 'Goose Island 312 Dry-Hopped',
    type: 'Wheat Beer',
    country: 'USA',
    state: 'Illinois',
    abv: 4.2
  }, {
    name: 'Sonoma Cider The Hatchet Hard Apple Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'California',
    abv: 6.0
  }, {
    name: 'Sonoma Cider The Pitchfork Hard Pear Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'California',
    abv: 6.0
  }, {
    name: 'Angry Orchard Crisp Apple Cider',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Massachusetts',
    abv: 5.0
  }, {
    name: 'Angry Orchard Green Apple',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Massachusetts',
    abv: 5.0
  }, {
    name: 'Stem Cider Chile Guava',
    type: 'Hard Cider',
    country: 'USA',
    state: 'Colorado',
    abv: 5.7
  }, {
    name: 'Solemn Oath Snaggletooth Bandana',
    type: 'IPA',
    country: 'USA',
    state: 'Illinois',
    abv: 6.5
  }, {
    name: 'Miller Lite',
    type: 'Lager',
    country: 'USA',
    state: 'Wisconsin',
    abv: 4.17
  }, {
    name: 'Miller High Life',
    type: 'Lager',
    country: 'USA',
    state: 'Wisconsin',
    abv: 4.6
  }, {
    name: 'Bud Light',
    type: 'Lager',
    country: 'USA',
    state: 'Missouri',
    abv: 4.2
  }, {
    name: 'Taiwan Beer Sweet Touch Lychee',
    type: 'Fruit Beer',
    country: 'Taiwan',
    state: '',
    abv: 3.5
  }, {
    name: 'Natural Light',
    type: 'Lager',
    country: 'USA',
    state: 'Missouri',
    abv: 4.2
  }, {
    name: 'Pacifico',
    type: 'Lager',
    country: 'Mexico',
    state: '',
    abv: 4.5
  }, {
    name: 'Redd\'s Apple Ale',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Georgia',
    abv: 5.0
  }, {
    name: 'Lost Coast Tangerine Wheat',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'California',
    abv: 5.5
  }, {
    name: 'Samuel Smith\'s Organic Cherry',
    type: 'Fruit Beer',
    country: 'England',
    state: '',
    abv: 5.1
  }, {
    name: 'Goose Island Honker\'s Ale',
    type: 'English Bitter',
    country: 'USA',
    state: 'Illinois',
    abv: 4.3
  }, {
    name: 'Schlafly Merry Berry',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Missouri',
    abv: 6.0
  }, {
    name: 'Short\'s Soft Parade Shandy',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Michigan',
    abv: 4.2
  }, {
    name: 'Boulevard Ginger Lemon Radler',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Missouri',
    abv: 4.1
  }, {
    name: 'Shiner Ruby Redbird',
    type: 'Fruit Beer',
    country: 'USA',
    state: 'Texas',
    abv: 4.1
  }];
});
// CONCATENATED MODULE: ./reducers/index.js






const allReducers = Object(external_redux_["combineReducers"])({
  resumeReducer: resume_reducer,
  gameState: GameState,
  kitsReducer: kits_reducer,
  accomplishmentsReducer: accomplishments_reducer,
  beerReducer: beer_reducer
});
/* harmony default export */ var reducers = (allReducers);
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

 // import withRedux from 'next-redux-wrapper'; // this replaces all calls to it in containers
// import App from 'next/app';

 // import ReactDOM from 'react-dom';




const store = Object(external_redux_["createStore"])(reducers);
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(Component, pageProps));
} // export default withRedux(createStore, { debug: shouldShowDebugLogs })(class MyApp extends App {
//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// });

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "wQ99":
/***/ (function(module, exports) {



/***/ })

/******/ });