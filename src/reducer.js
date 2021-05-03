import { combineReducers } from 'redux';
import sortReducer from './components/tabs/reducer';
import filterReducer from './components/filter/reducer';

const reducer = combineReducers({
    sort: sortReducer,
    filters: filterReducer,
});

export default reducer;
