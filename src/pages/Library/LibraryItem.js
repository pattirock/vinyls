import React from 'react';
import PropTypes from 'prop-types';

class LibraryItem extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="column is-3">
        <div className="panel">
          <p className="is-marginless">
            <img src="https://placehold.it/300x300" />
          </p>
          <div className="panel-block">
            <div className="columns">
              <div className="column">
                <div className="panel-block-item">{name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LibraryItem.propTypes = {
  name: PropTypes.string,
};

export default LibraryItem;
