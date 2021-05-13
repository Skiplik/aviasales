import { initialState, SET_TICKETS, STOP_LOAD, FETCH_TOGGLE, SET_ERROR } from './actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOGGLE:
            return {
                ...state,
                isFetch: !state.isFetch,
            };

        case SET_ERROR:
            return {
                ...state,
                isError: action.payload,
            };

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
