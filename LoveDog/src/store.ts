import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {dogReducer, TypeDogReducer} from './reducers/dog';
import {TypeUserReducer, userReducer} from './reducers/user';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  dog: dogReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // 상수 store는 한 번만 선언

export type RootReducer = {dog: TypeDogReducer; user: TypeUserReducer};

export default store;
