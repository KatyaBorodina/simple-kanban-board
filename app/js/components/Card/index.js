import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardContainer extends React.Component {

    handleCardDragStart = (event) => {
        const { id, columnId } = this.props;
        const card = JSON.stringify({ id, columnId });

        event.dataTransfer.setData('card', card);
    };

    render() {
        const { title } = this.props;

        return (
            <Card
                title={title}
                onCardDragStart={this.handleCardDragStart}
            />
        );
    }
}

CardContainer.propTypes = {
    id: PropTypes.number.isRequired,
    columnId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default CardContainer;
