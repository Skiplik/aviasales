import { initialState, TOGGLE_FILTER } from './actions';
import { toggleFilter } from './helper';

const reducer = (state = initialState , action) => {
    if (action.type === TOGGLE_FILTER) {
        return toggleFilter(state, action.payload);
    }

    return state;
}

export default reducer;