import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter, TransferCountFilter } from './actions';

import './filter.scss';

const filtersKey = [
    { id: TransferCountFilter.ALL, title: 'Все' },
    { id: TransferCountFilter.ZERO, title: 'Без пересадок' },
    { id: TransferCountFilter.ONE, title: '1 пересадка' },
    { id: TransferCountFilter.TWO, title: '2 пересадки' },
    { id: TransferCountFilter.THREE, title: '3 пересадки' },
];

const Filter = ({ filters, set }) => {
    const renderFilters = () =>
        filtersKey.map((filter) => {
            return (
                <li key={filter.id}>
                    <label className="filter__item">
                        <input
                            className="filter__checkbox"
                            type="checkbox"
                            value={filter.id}
                            checked={filters.includes(filter.id)}
                            onChange={({ target: { value } }) => set(value)}
                        />
                        {filter.title}
                    </label>
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

Filter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    set: PropTypes.func.isRequired
};

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps, { set: setFilter })(Filter);
