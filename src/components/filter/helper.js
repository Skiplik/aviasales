import { initialState } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const toggleFilter = (state, filter) => {
    if (filter === initialState[0]) {
        return state.length === initialState.length ? [] : initialState;
    }

    if (!state.includes(filter)) {
        return state.length >= initialState.length - 2 ? initialState : [...state, filter];
    }

    if (state.length === initialState.length) {
        return state.filter((_filter) => ![initialState[0], filter].includes(_filter));
    }

    return state.filter((_filter) => _filter !== filter);
};
