import React from 'react';

import Tabs from '../tabs';
import Button from '../button';
import Ticket from '../ticket';

import './tickets.scss';

const Tickets = () => {
    const tickets = [
        {
            price: 10000, // Цена в рублях
            carrier: 'VF', // Код авиакомпании (iata)
            segments: [
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
            ],
        },
        {
            price: 10000, // Цена в рублях
            carrier: 'VF', // Код авиакомпании (iata)
            segments: [
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
            ],
        },
        {
            price: 10000, // Цена в рублях
            carrier: 'VF', // Код авиакомпании (iata)
            segments: [
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
                {
                    origin: 'POW', // Код города (iata)
                    destination: 'ADE', // Код города (iata)
                    date: '10:45 – 08:00', // Дата и время вылета туда
                    stops: ['AGF', 'AGA'], // Массив кодов (iata) городов с пересадками
                    duration: 615, // Общее время перелёта в минутах
                },
            ],
        },
    ];

    const renderTickets = tickets.map((ticket) => (
        <li key={Math.random()} className="tickets__item">
            <Ticket ticket={ticket} />
        </li>
    ));

    return (
        <div className="tickets">
            <Tabs />
            <ul className="tickets__list">{renderTickets}</ul>
            <Button className="tickets__show-more" btnClasses={['show-more']} title="Показать еще 5 билетов!" />
        </div>
    );
};

export default Tickets;
