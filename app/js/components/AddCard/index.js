import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';

import AddCard from './AddCard';

const modalRoot = document.getElementById('modal-root');

class AddCardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.state = {
            title: '',
            isSubmitDisabled: true
        };
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    handleTitleChange = (event) => {
        const title = event.target.value;

        this.setState({
            title,
            isSubmitDisabled: !title
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title } = this.state;
        const { columnId, onClose, dispatch } = this.props;

        dispatch(actions.addCard(title, columnId));
        onClose();
    };

    render() {
        const { onClose } = this.props;
        const { title, isSubmitDisabled } = this.state;

        return createPortal(
            <AddCard
                title={title}
                onClose={onClose}
                isSubmitDisabled={isSubmitDisabled}
                handleSubmit={this.handleSubmit}
                handleCloseClick={this.handleCloseClick}
                handleTitleChange={this.handleTitleChange}
            />,
            this.el,
        );
    }
}

AddCardContainer.propTypes = {
    columnId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(AddCardContainer);
