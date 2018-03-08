import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import StandardLayout from '../../layouts/StandardLayout/StandardLayout';
import LibraryItem from './LibraryItem';

class Library extends React.Component {
  componentDidMount() {
    this.props.getVinyls();
  }

  componentWillReceiveProps(nextProps) {
    console.debug(nextProps);
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.vinyls, this.props.vinyls);
  }

  getItems() {
    const { vinyls } = this.props;
    let vinylsItem;

    // console.debug(vinyls);

    if (vinyls.lenght > 0) {
      vinylsItem = vinyls.map((item, index) => {
        const key = index;
        return (<LibraryItem
          key={`key-${key}`}
          name={item.name}
        />);
      });
    } else {
      vinylsItem = 'There are not vinyls';
    }

    return vinylsItem;
  }
  render() {
    console.debug('RENDER');
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
  vinyls: PropTypes.arrayOf(PropTypes.object),
  getVinyls: PropTypes.func,
};

Library.defaultProps = {
  vinyls: [],
  getVinyls: () => {},
};

export default Library;
