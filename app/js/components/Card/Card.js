import React from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

const Card = (props) => {
    const {
        title,
        onCardDragStart
    } = props;
    return (
        <div
            draggable
            className="card"
            onDragStart={onCardDragStart}
        >{title}</div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    onDragStart: PropTypes.func.isRequired
};

Card.defaultProps = {
    title: '',
    onDragStart() {}
};

export default Card;

