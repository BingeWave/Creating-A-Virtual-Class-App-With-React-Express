import React from 'react';

import Api from '../util/Api';

import { useHistory } from "react-router-dom";

class RegisterPage extends React.Component {

  constructor(props) {

    super(props);

    this.register = this.register.bind(this);

    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      errors: null
    };

  }

  register() {

    Api.register(this.state, (response) => {

      localStorage.setItem("user_id", response.id);
      localStorage.setItem("auth_token", response.auth_token);
      localStorage.setItem("first_name", response.first_name);
      localStorage.setItem("last_name", response.last_name);
      localStorage.setItem("roles", JSON.stringify(response.roles));

      this.setState({ errors: null });

      const history = useHistory();

      history.push('/classes');

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
        <h2 className="text-center">Register</h2>
        <div>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              onChange={(e) => this.setState({ first_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              onChange={(e) => this.setState({ last_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
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
          <div className="mb-3">
            <label htmlFor="agree_to_terms" className="form-label">
              Agree To Terms
            </label>
            <input
              type="checkbox"
              id="agree_to_terms"
              value="1"
              onChange={(e) => this.setState({ agree_to_terms: e.target.value })} />
          </div>
          <div className="col-12">

            {errorTag}

            <button className="btn btn-primary" type="submit" onClick={this.register}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;