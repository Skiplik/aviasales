import service from '../../service';

// action types
export const SET_TICKETS = 'SET_TICKETS';
export const STOP_LOAD = 'STOP_LOAD';
export const FETCH_TOGGLE = 'FETCH_TOGGLE';
export const SET_ERROR = 'SET_ERROR';

// initialState
export const initialState = {
    isFetch: false,
    isError: false,
    fullList: true,
    list: [],
    show: 20,
};

// actions creator
export const setTickets = (payload) => ({
    type: SET_TICKETS,
    payload,
});

export const fetchToggle = () => ({
    type: FETCH_TOGGLE,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const stopLoad = (payload) => ({
    type: STOP_LOAD,
    payload,
});

export const getTickets = () => (dispatch) => {
    dispatch(setError(false));
    dispatch(fetchToggle());

    service
        .getTickets()
        .then(({ stop, tickets }) => {
            dispatch(setTickets(tickets));
            dispatch(stopLoad(stop));
        })
        .catch(() => {
            dispatch(setError(true));
        })
        .finally(() => {
            dispatch(fetchToggle());
        });
};

export default {
    setTickets,
    getTickets,
    stopLoad,
};
