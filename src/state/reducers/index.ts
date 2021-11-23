import { combineReducers } from 'redux';

// import reducers
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';

const reducers = combineReducers({
  album: albumReducer,
  photo: photoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;