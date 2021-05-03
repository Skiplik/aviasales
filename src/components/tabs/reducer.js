import { initialState, SET_SORT } from './actions';

const reducer = (state = initialState, action) => {
    if (action.type === SET_SORT) {
        return action.payload;
    }

    return state;
};

export default reducer;
