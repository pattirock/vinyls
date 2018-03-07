import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import StandardLayout from '../../layouts/StandardLayout/StandardLayout.js';
import LibraryItem from './LibraryItem.js';

class Library extends React.Component {
  componentDidMount(){
    this.props.getVinyls();
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.vinyls, this.props.vinyls);
  }

  getItems() {
    const { vinyls } = this.props;

    return vinyls.map((item, index) => {
      return <LibraryItem
        key={`key-${index}`}
        name={item.name}
      />;
    });
  }
  render() {
    return (
    <StandardLayout>
      <div className="container has-text-centered">
        <div className="columns">
          {this.getItems()}
        </div>
        
      </div>
    </StandardLayout>
    );
  }
}

Library.propTypes = {
  vinyls: PropTypes.array,
  getVinyls: PropTypes.func,
};

export default Library;
