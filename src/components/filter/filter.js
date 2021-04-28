import React from 'react';

import './filter.scss';

import { FILTER_0, FILTER_1, FILTER_2, FILTER_3, FILTER_ALL } from '../../constants';

const filtersKey = [
    { id: 1, key: FILTER_ALL, title: 'Все' },
    { id: 2, key: FILTER_0, title: 'Без пересадок' },
    { id: 3, key: FILTER_1, title: '1 пересадка' },
    { id: 4, key: FILTER_2, title: '2 пересадки' },
    { id: 5, key: FILTER_3, title: '3 пересадки' },
];

const Filter = () => {
    const renderFilters = () =>
        filtersKey.map((filter) => {
            return (
                <li key={filter.id} className="filter__item">
                    <input className="filter__checkbox" type="checkbox" value={filter.key} />
                    {filter.title}
                </li>
            );
        });

    return (
        <div className="filter">
            <div className="filter__title">Количество пересадок</div>
            <ul className="filter__list">{renderFilters()}</ul>
        </div>
    );
};

export default Filter;
