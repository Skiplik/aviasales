import { TransferCountFilter } from '../filter/actions';
import { SortTicketsKey } from '../tabs/actions';

export const filter = (ticket, filters) => {
    const stopsKeys = {
        0: TransferCountFilter.ZERO,
        1: TransferCountFilter.ONE,
        2: TransferCountFilter.TWO,
        3: TransferCountFilter.THREE,
    };
    return (
        filters.includes(stopsKeys[ticket.segments[0].stops.length]) ||
        filters.includes(stopsKeys[ticket.segments[1].stops.length])
    );
};

export const sorting = (ticket1, ticket2, sort) => {
    const {
        price: price1,
        segments: [{ duration: duration1 }],
    } = ticket1;
    const {
        price: price2,
        segments: [{ duration: duration2 }],
    } = ticket2;

    switch (sort) {
        case SortTicketsKey.FAST:
            return duration1 - duration2;
        case SortTicketsKey.OPTIMAL:
            return price1 - price2 || duration1 - duration2;
        default:
            return price1 - price2;
    }
};

export const selectTickets = (tickets, filters, sort) => {
    let ticketsList = tickets;

    if (!filters.includes(TransferCountFilter.ALL)) {
        ticketsList = tickets.filter((ticket) => filter(ticket, filters));
    }

    return ticketsList.sort((ticket1, ticket2) => sorting(ticket1, ticket2, sort));
};
