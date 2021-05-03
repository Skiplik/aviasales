import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSort, SortTicketsKey } from './actions';

import Button from '../button';

import './tabs.scss';

const TABS = [
    { id: SortTicketsKey.CHEAP, title: 'Самый дешевый' },
    { id: SortTicketsKey.FAST, title: 'Самый быстрый' },
    { id: SortTicketsKey.OPTIMAL, title: 'Оптимальный' }
]

const Tabs = ({ sort, set }) => {
    const tabs = TABS.map(tab => {
        const classes = ['tabs'];

        if (tab.id === sort) classes.push('tabs-active');

        return <Button
            key={tab.id}
            btnClasses={classes}
            title={tab.title}
            click={() => set(tab.id)}
        />
    });

    return (
        <div className="tabs">
            { tabs }
        </div>
    );
};

Tabs.propTypes = {
    sort: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired
};

const mapStateToProps = ({ sort }) => ({ sort });

export default connect(mapStateToProps, { set: setSort })(Tabs);
