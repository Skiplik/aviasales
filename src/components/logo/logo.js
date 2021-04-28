import React from 'react';
import PropTypes from 'prop-types';

import logo from './Logo.png';

import './logo.scss';

const Logo = (props) => {
    const { classes } = props;

    return <img className={[...classes, 'logo'].join(' ')} src={logo} alt="Aviasales" />;
};

Logo.defaultProps = {
    classes: [],
};

Logo.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default Logo;
