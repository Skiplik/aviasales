import { initialState, SET_TICKETS, STOP_LOAD } from './actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STOP_LOAD:
            return {
                ...state,
                fullList: action.payload,
            };

        case SET_TICKETS:
            return {
                ...state,
                list: [...state.list, ...action.payload],
            };

        default:
            return state;
    }
};

export default reducer;
