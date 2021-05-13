import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets } from './actions';
import { selectTickets } from './helpers';

import Tabs from '../tabs';
import Button from '../button';
import Ticket from '../ticket';

import './tickets.scss';

const Tickets = (props) => {
    const { tickets, isFullList, requestTickets, isFetch, isError } = props;

    const otherContent = () => {
        if (isFetch) return <div className="tickets__loader" />;

        if (isError) {
            return (
                <Button
                    className="tickets__error"
                    title="Что-то пошло не так во время загрузки билетов! Нажмите, чтобы повторите попытку"
                    click={requestTickets}
                />
            );
        }

        if (!tickets.length) {
            return <p className="tickets__empty">Рейсов, подходящих под заданные фильтры, не найдено</p>;
        }

        if (!isFullList) {
            return (
                <Button
                    className="tickets__show-more"
                    btnClasses={['show-more']}
                    title="Показать еще билетов!"
                    click={requestTickets}
                />
            );
        }

        return null;
    };

    return (
        <div className="tickets">
            <Tabs />
            <ul className="tickets__list">{tickets.length ? tickets : null}</ul>
            {otherContent()}
        </div>
    );
};

Tickets.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFullList: PropTypes.bool.isRequired,
    requestTickets: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
    isFetch: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ tickets, sort, filters }) => {
    const { list, fullList, isError, isFetch } = tickets;

    return {
        tickets: selectTickets(list, filters, sort).map((ticket) => (
            <li key={ticket.carrier + ticket.price + ticket.segments[0].duration} className="tickets__item">
                <Ticket ticket={ticket} />
            </li>
        )),
        isFullList: fullList,
        isError,
        isFetch,
    };
};

export default connect(mapStateToProps, { requestTickets: getTickets })(Tickets);
