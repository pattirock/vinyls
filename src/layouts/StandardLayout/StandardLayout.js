import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../../partials/Menu/Menu.js';
import './StandardLayout.css';

class StandardLayout extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <Menu />
        </div>

        <div className="hero-body">
          {this.props.children}
        </div>
      </section>
    );
  }
}

StandardLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default StandardLayout;
