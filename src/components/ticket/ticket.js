import React from 'react';
import PropTypes from 'prop-types';

import './ticket.scss';

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
                <div className="ticket__company">{carrier}</div>
            </div>
            <div className="ticket__row ticket__row--header">
                <div className="ticket__cell">{`${there.origin} - ${there.destination}`}</div>
                <div className="ticket__cell">в пути</div>
                <div className="ticket__cell">{`${there.stops.length} пересадки`}</div>
            </div>
            <div className="ticket__row">
                <div className="ticket__cell">{there.date}</div>
                <div className="ticket__cell">{there.duration}</div>
                <div className="ticket__cell">{there.stops.join(', ')}</div>
            </div>
            <div className="ticket__row ticket__row--header">
                <div className="ticket__cell">{`${back.origin} - ${back.destination}`}</div>
                <div className="ticket__cell">в пути</div>
                <div className="ticket__cell">{`${back.stops.length} пересадки`}</div>
            </div>
            <div className="ticket__row">
                <div className="ticket__cell">{back.date}</div>
                <div className="ticket__cell">{back.duration}</div>
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
