import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import SignInLayout from '../../layouts/SignInLayout';

class SignIn extends React.Component {
  render() {
    const { handleFormSubmit } = this.props;

    return (
      <SignInLayout>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign In</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" alt="Profile" />
                </figure>
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <div className="control">
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        className="input is-large"
                        placeholder="Your Email"
                        autoFocus
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <Field
                        name="password"
                        component="input"
                        type="password"
                        className="input is-large"
                        placeholder="Your Password"
                        required
                      />
                    </div>
                  </div>
                  <button
                    className="button is-block is-info is-large is-fullwidth"
                    type="submit"
                  >Log In
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <Link to="/signup" title="Sign Up">Sign Up</Link> &nbsp;·&nbsp;
                <Link to="/forgot-password" title="Forgot Password">Forgot Password</Link>
              </p>
            </div>
          </div>
        </div>
      </SignInLayout>
    );
  }
}

SignIn.propTypes = {
  handleFormSubmit: PropTypes.func,
};

SignIn.defaultProps = {
  handleFormSubmit: () => {},
};

// export default reduxForm({
//   form: 'signin',
// })(SignIn);

export default SignIn;
