import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets } from './actions';

import Tabs from '../tabs';
import Button from '../button';
import Ticket from '../ticket';

import './tickets.scss';

const Tickets = ({ tickets, isFullList, requestTickets }) => {
    const renderTickets = tickets.map((ticket) => (
        <li key={Math.random()} className="tickets__item">
            <Ticket ticket={ticket} />
        </li>
    ));

    return (
        <div className="tickets">
            <Tabs />
            <ul className="tickets__list">{renderTickets}</ul>
            {isFullList ? null : (
                <Button
                    className="tickets__show-more"
                    btnClasses={['show-more']}
                    title="Показать еще 5 билетов!"
                    click={requestTickets}
                />
            )}
        </div>
    );
};

Tickets.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFullList: PropTypes.bool.isRequired,
    requestTickets: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tickets }) => {
    const { list, fullList } = tickets;

    return {
        tickets: list,
        isFullList: fullList,
    };
};

export default connect(mapStateToProps, { requestTickets: getTickets })(Tickets);
