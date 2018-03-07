import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark not-found">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-8 is-offset-2">
                <h1 className="title is-2 ">ERROR 404</h1>
                <hr />
                <h2 className="subtitle is-4">ooops, something went wrong.</h2>
                <br />
                <a className="button is-danger is-outlined">Go Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
