import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Column from './Column';

class AppContainer extends React.Component {

    render() {
        const { columns } = this.props;

        return (
            <div className="columns-wrapper">
                {columns.map(column => {
                    return (
                        <Column
                            id={column.id}
                            key={column.id}
                            title={column.title}
                        />
                    );
                })}
            </div>
        );
    }
}

AppContainer.propTypes = {
    columns: PropTypes.array.isRequired
};

export default connect(state => ({ columns: state.columns }))(AppContainer);
