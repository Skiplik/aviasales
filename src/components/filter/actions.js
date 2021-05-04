// action types
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

// keys for filter tickets
export const TransferCountFilter = {
    ALL: 'ALL',
    ZERO: 'ZERO',
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
};

// initialState
export const initialState = Object.values(TransferCountFilter);

// actions creator
export const setFilter = (payload) => ({
    type: TOGGLE_FILTER,
    payload,
});
