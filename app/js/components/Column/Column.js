import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import AddCard from '../AddCard';

import './css/style.css';

const Column = React.forwardRef((props, ref) => {
    const {
        id, title, cards, isAddCardOpened,
        handleAddCard, handleCloseAddCard,
        onColumnDrop, onColumnEnter, onColumnLeave, onColumnDragOver
    } = props;

    return (
        <div
            className="column"
            onDrop={onColumnDrop}
            onDragEnter={onColumnEnter}
            onDragLeave={onColumnLeave}
            onDragOver={onColumnDragOver}
        >
            <div className="column__title">
                {title}
                <button onClick={handleAddCard} className="column__add-card">Add card</button>
            </div>
            <div className="column__cards" ref={ref}>
                {cards.map(card => {
                    const { id, title, columnId } = card;
                    return (
                        <Card
                            id={id}
                            key={id}
                            title={title}
                            columnId={columnId}
                        />
                    );
                })}
            </div>
            {isAddCardOpened && <AddCard columnId={id} onClose={handleCloseAddCard} />}
        </div>
    )
});

Column.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    isAddCardOpened: PropTypes.bool.isRequired,
    handleAddCard: PropTypes.func.isRequired,
    handleCloseAddCard: PropTypes.func.isRequired,
    onColumnDrop: PropTypes.func.isRequired,
    onColumnEnter: PropTypes.func.isRequired,
    onColumnLeave: PropTypes.func.isRequired,
    onColumnDragOver: PropTypes.func.isRequired
};

Column.defaultProps = {
    id: 0,
    title: '',
    cards: [],
    isAddCardOpened: false,
    handleAddCard() {},
    handleCloseAddCard() {},
    onColumnDrop() {},
    onColumnEnter() {},
    onColumnLeave() {},
    onColumnDragOver() {}
};

export default Column;

