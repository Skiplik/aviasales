import service from '../../service';

// action types
export const SET_TICKETS = 'SET_TICKETS';
export const STOP_LOAD = 'STOP_LOAD';

// initialState
export const initialState = {
    fullList: true,
    list: [],
};

// actions creator
export const setTickets = (payload) => ({
    type: SET_TICKETS,
    payload,
});

export const stopLoad = (payload) => ({
    type: STOP_LOAD,
    payload,
});

export const getTickets = () => (dispatch) => {
    service.getTickets().then(({ stop, tickets }) => {
        dispatch(setTickets(tickets));
        dispatch(stopLoad(stop));
    });
};

export default {
    setTickets,
    getTickets,
    stopLoad,
};
