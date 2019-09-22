import React from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

const AddCard = (props) => {
    const { title, isSubmitDisabled, handleSubmit, onClose, handleTitleChange } = props;

    return (
        <div className="modal">
            <div className="add-card">
                <div className="add-card__title">
                    <span>Add Card</span>
                    <span onClick={onClose} className="add-card__close">X</span>
                </div>
                <div className="add-card__content">
                    <form noValidate>
                        <input
                            autoFocus
                            type="text"
                            value={title}
                            placeholder="New card title"
                            onChange={handleTitleChange}
                        />
                        <button type="submit" onClick={handleSubmit} disabled={isSubmitDisabled}>
                            {'Add card'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

AddCard.propTypes = {
    title: PropTypes.string.isRequired,
    isSubmitDisabled: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired
};

AddCard.defaultProps = {
    title: '',
    isSubmitDisabled: true,
    handleSubmit() {},
    onClose() {},
    handleTitleChange() {}
};

export default AddCard;

