import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Top250Reducer from './top250';
import UsboxReducer from './usbox';
import IntheatersReducer from './intheaters';
import ComingsoonReducer from './comingsoon';
import DetailReducer from './detail';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  top250: Top250Reducer,
  usbox: UsboxReducer,
  intheaters: IntheatersReducer,
  comingsoon: ComingsoonReducer,
  detail: DetailReducer,
  routing:routerReducer,
  form: FormReducer
});

export default rootReducer;
