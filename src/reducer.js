import { combineReducers } from 'redux';
import sortReducer from './components/tabs/reducer';
import filterReducer from './components/filter/reducer';
import ticketReducer from './components/tickets/reducer';

const reducer = combineReducers({
    sort: sortReducer,
    filters: filterReducer,
    tickets: ticketReducer,
});

export default reducer;
