// action types
export const SET_SORT = 'SET';

// keys for sorting tickets
export const SortTicketsKey = {
    CHEAP: 'CHEAP',
    FAST: 'FAST',
    OPTIMAL: 'OPTIMAL',
};

// initialState
export const initialState = SortTicketsKey.CHEAP;

// actions creator
export const setSort = (payload) => ({
    type: SET_SORT,
    payload,
});
