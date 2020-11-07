import { combineReducers } from 'redux';
import resumeReducer from './resume-reducer';
import kitsReducer from './kits-reducer';
import accomplishmentsReducer from './accomplishments-reducer';
import GameState from './GameState';
import beerReducer from './beer-reducer';

const allReducers = combineReducers({
  resumeReducer: resumeReducer,
  gameState: GameState,
  kitsReducer: kitsReducer,
  accomplishmentsReducer: accomplishmentsReducer,
  beerReducer: beerReducer,
});

export default allReducers;