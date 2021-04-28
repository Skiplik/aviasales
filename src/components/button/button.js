import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
    const { title, btnClasses, className } = props;
    const classList = [className, 'btn', ...btnClasses.map((name) => `btn--${name}`)];

    return (
        <button className={classList.join(' ')} type="button">
            {title}
        </button>
    );
};

Button.defaultProps = {
    title: 'Нажми',
    btnClasses: [],
    className: '',
};

Button.propTypes = {
    title: PropTypes.string,
    btnClasses: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};

export default Button;
