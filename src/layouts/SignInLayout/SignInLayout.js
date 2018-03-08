import React from 'react';
import PropTypes from 'prop-types';

class SignInLayout extends React.Component {
  render() {
    return (
      <section className="hero is-success is-fullheight">
        {this.props.children}
      </section>
    );
  }
}

SignInLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignInLayout;
