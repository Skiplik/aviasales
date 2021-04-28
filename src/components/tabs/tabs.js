import React from 'react';

import Button from '../button';

import './tabs.scss';

const Tabs = () => {
    const classes = ['tabs'];

    return (
        <div className="tabs">
            <Button btnClasses={classes} title="Самый дешевый" />
            <Button btnClasses={classes} title="Самый быстрый" />
            <Button btnClasses={classes} title="Оптимальный" />
        </div>
    );
};

export default Tabs;
