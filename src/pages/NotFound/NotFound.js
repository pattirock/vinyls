import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark">
        <div className="hero-head">
          <div className="container">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand is-left">
                  <a className="navbar-item" href="">PattiRock - Vinyls</a>
                </div>
                <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div class="navbar-end">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Tour</a>
                    <a className="navbar-item">FAQ</a>
                    <a className="navbar-item">Contact</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-8 is-offset-2">
                <h1 className="title is-2">
                  Introducing Landing Page
                </h1>
                <h2 className="subtitle is-4">It's time to say hello to bulma.</h2>
                <br />
                {/* <p className="control has-addons has-text-centered">
                  <input className="input is-expanded is-large" type="text" placeholder="Join the beta waitlist, you@example.org" />
                  <a className="button is-large is-danger is-outlined">Sign Up</a>
                </p> */}
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input className="input is-large" type="text" placeholder="Join the beta waitlist, you@example.org" />
                  </div>
                  <div className="control">
                  <a className="button is-large is-danger is-outlined">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>Copyright 2018 PattiRock</li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default NotFound;
