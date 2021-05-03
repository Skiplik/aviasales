import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
    const { title, btnClasses, className, click } = props;
    const classList = [className, 'btn', ...btnClasses.map((name) => `btn--${name}`)];

    return (
        <button className={classList.join(' ')} type="button" onClick={click}>
            {title}
        </button>
    );
};

Button.defaultProps = {
    title: 'Нажми',
    btnClasses: [],
    className: '',
    click: () => {},
};

Button.propTypes = {
    title: PropTypes.string,
    btnClasses: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    click: PropTypes.func,
};

export default Button;
