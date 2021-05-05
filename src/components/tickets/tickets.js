import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets } from './actions';

import Tabs from '../tabs';
import Button from '../button';
import Ticket from '../ticket';

import './tickets.scss';
import { TransferCountFilter } from '../filter/actions';
import { SortTicketsKey } from '../tabs/actions';

const filter = (ticket, filters) => {
    const stopsKeys = {
        0: TransferCountFilter.ZERO,
        1: TransferCountFilter.ONE,
        2: TransferCountFilter.TWO,
        3: TransferCountFilter.THREE,
    }
    return filters.includes(stopsKeys[ticket.segments[0].stops.length])
        || filters.includes(stopsKeys[ticket.segments[1].stops.length]);
}

const sorting = (ticket1, ticket2, sort) => {
    const {
        price: price1,
        segments: [{ duration: duration1 }]
    } = ticket1;
    const {
        price: price2,
        segments: [{ duration: duration2 }]
    } = ticket2;

    switch (sort) {
        case SortTicketsKey.FAST:
            return duration1 - duration2;
        case SortTicketsKey.OPTIMAL:
            return price1 - price2 || duration1 - duration2;
        default:
            return price1 - price2;
    }
}

const renderTickets = (tickets, filters, sort) => {
    console.log(filters)
    let ticketsList = tickets;

    if (!filters.includes(TransferCountFilter.ALL)) {
        ticketsList = tickets.filter(ticket => filter(ticket, filters));
    }

    return ticketsList
        .sort((ticket1, ticket2) => sorting(ticket1, ticket2, sort))
        .map((ticket) => (
            <li key={Math.random()} className="tickets__item">
                <Ticket ticket={ticket} />
            </li>
        ));
};

const Tickets = (props) => {
    const {
        sort,
        filters,
        tickets,
        isFullList,
        requestTickets,
        isFetch,
        isError
    } = props;

    return (
        <div className="tickets">
            <Tabs />
            <ul className="tickets__list">
                { renderTickets(tickets, filters, sort) }
                {
                    isFetch && <li className='tickets__item'>
                        <div className="tickets__loader" />
                    </li>
                }
                {
                    isError && <li className='tickets__item'>
                        <Button
                            className="tickets__error"
                            title="Что-то пошло не так! Нажмите, чтобы повторите попытку"
                            click={requestTickets}
                        />
                    </li>
                }
            </ul>
            { isFullList ? null : (
                <Button
                    className="tickets__show-more"
                    btnClasses={['show-more']}
                    title="Показать еще!"
                    click={requestTickets}
                />
            )}
        </div>
    );
};

Tickets.propTypes = {
    sort: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFullList: PropTypes.bool.isRequired,
    requestTickets: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
    isFetch: PropTypes.bool.isRequired
};

const mapStateToProps = ({ tickets, sort, filters }) => {
    const { list, fullList, isError, isFetch } = tickets;

    return {
        sort,
        filters,
        tickets: list,
        isFullList: fullList,
        isError,
        isFetch
    };
};

export default connect(mapStateToProps, { requestTickets: getTickets })(Tickets);
