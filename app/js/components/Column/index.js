import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';

import Column from './Column';

class ColumnContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isAddCardOpened: false };
        this.cardsRef = React.createRef();
    }

    handleAddCard = () => {
        this.setState({ isAddCardOpened: true });
    };

    handleCloseAddCard = () => {
        this.setState({ isAddCardOpened: false });
    };

    handleColumnDragOver = (event) => {
        event.preventDefault();
    };

    handleColumnEnter = (event) => {
        this.cardsRef.current.classList.add('droppable');
    };

    handleColumnLeave = () => {
        this.cardsRef.current.classList.remove('droppable');
    };

    handleColumnDrop = (event) => {
        this.cardsRef.current.classList.remove('droppable');

        const { id, dispatch } = this.props;
        const card = JSON.parse(event.dataTransfer.getData('card'));

        if (card.columnId !== id) {
            dispatch(actions.changeCardColumn(card.id, card.columnId, id));
        }
    };

    render() {
        const { isAddCardOpened } = this.state;
        const { id, title, cards } = this.props;

        return (
            <Column
                id={id}
                title={title}
                cards={cards}
                ref={this.cardsRef}
                isAddCardOpened={isAddCardOpened}
                handleAddCard={this.handleAddCard}
                handleCloseAddCard={this.handleCloseAddCard}
                onColumnDrop={this.handleColumnDrop}
                onColumnEnter={this.handleColumnEnter}
                onColumnLeave={this.handleColumnLeave}
                onColumnDragOver={this.handleColumnDragOver}
            />
        );
    }
}

ColumnContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect((state, ownProps) => ({
    cards: state.columns.find(column => column.id === ownProps.id).cards
}))(ColumnContainer);
