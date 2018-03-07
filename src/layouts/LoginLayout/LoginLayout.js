import React from 'react';
import PropTypes from 'prop-types';

class LoginLayout extends React.Component {
  render() {
    return (
    <section className="hero is-success is-fullheight">
       {this.props.children} 
    </section>
    );
  }
}

LoginLayout.propTypes = {  
  children: PropTypes.object.isRequired
};

export default LoginLayout;
