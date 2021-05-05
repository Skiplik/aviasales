import React from 'react';
import PropTypes from 'prop-types';
import { getTimeDiff, getParseTime, getStopText } from './helper';

import './ticket.scss';
import company from './S7Logo.png';

const Ticket = (props) => {
    const {
        ticket: {
            price,
            carrier,
            segments: [there, back],
        },
    } = props;

    return (
        <div className="ticket">
            <div className="ticket__row">
                <span className="ticket__cost">{`${price} p`}</span>
                <img className="ticket__company" src={company} alt={carrier} />
            </div>
            <div className="ticket__row ticket__row--header">
                <div className="ticket__cell">{`${there.origin} - ${there.destination}`}</div>
                <div className="ticket__cell">в пути</div>
                <div className="ticket__cell">{getStopText(there.stops.length)}</div>
            </div>
            <div className="ticket__row">
                <div className="ticket__cell">{getTimeDiff(there.date, there.duration)}</div>
                <div className="ticket__cell">{getParseTime(there.duration)}</div>
                <div className="ticket__cell">{there.stops.join(', ')}</div>
            </div>
            <div className="ticket__row ticket__row--header">
                <div className="ticket__cell">{`${back.origin} - ${back.destination}`}</div>
                <div className="ticket__cell">в пути</div>
                <div className="ticket__cell">{getStopText(back.stops.length)}</div>
            </div>
            <div className="ticket__row">
                <div className="ticket__cell">{getTimeDiff(back.date, back.duration)}</div>
                <div className="ticket__cell">{getParseTime(back.duration)}</div>
                <div className="ticket__cell">{back.stops.join(', ')}</div>
            </div>
        </div>
    );
};

Ticket.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    ticket: PropTypes.object.isRequired,
};

export default Ticket;
