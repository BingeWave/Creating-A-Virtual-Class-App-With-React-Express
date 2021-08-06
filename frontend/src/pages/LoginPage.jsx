import React from 'react';

import Api from '../util/Api';

import { withRouter } from "react-router";

class LoginPage extends React.Component {

  constructor(props) {

    super(props);

    this.login = this.login.bind(this);

    this.state = {
      email: null,
      password: null,
      errors: null
    };

  }

  login() {

    Api.login(this.state, (response) => {

      localStorage.setItem("user_id", response.id);
      localStorage.setItem("auth_token", response.auth_token);
      localStorage.setItem("first_name", response.first_name);
      localStorage.setItem("last_name", response.last_name);
      localStorage.setItem("roles", JSON.stringify(response.roles));

      this.setState({ errors: null });

      this.props.history.push('/classes')

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }

  render() {

    let errorTag = '';

    if (this.state.errors) {
      errorTag = <div className="alert alert-danger">{this.state.errors}</div>
    }

    return (
      <div className="container mt-3">
        <h2 className="text-center">Login</h2>
        <div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="col-12">
            {errorTag}
            <button className="btn btn-primary" type="submit" onClick={this.login}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);