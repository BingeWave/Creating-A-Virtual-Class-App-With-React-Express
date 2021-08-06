import React from 'react';

import API from '../util/Api';

import { withRouter } from "react-router";

import AuthControl from '../components/AuthControl';

class ViewClassPage extends React.Component {

  constructor(props) {

    super(props);

    this.register = this.register.bind(this);

    this.state = {
      event: {},
      errors: null,
      registrationData: {
        quantity: 1
      },
      registrationErrors: null,
    };

  }


  componentDidMount() {

    const id = this.props.match.params.id;

    API.getClass(id, (data) => {

      this.setState({ event: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }

  register() {

    const id = this.props.match.params.id;

    API.registerForClass(id, this.state.registrationData, (data) => {

      this.props.history.push('/classes/attend/' + id);

    }, (errors) => {
      this.setState({ registrationErrors: errors.message });
    });

  }


  render() {

    let registerForm = '';

    let registerErrorTag = '';

    if (this.state.registrationErrors) {
      registerErrorTag = <div className="alert alert-danger">{this.state.registrationErrors}</div>
    }

    if (localStorage.getItem('auth_token')) {

      registerForm = <button className="btn btn-success" onClick={this.register} >Register For Event</button>

    } else {
      registerForm = (
        <div>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              onChange={(e) => this.setState({ registrationData: { ...this.state.registrationData, first_name: e.target.value } })}
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
              onChange={(e) => this.setState({ registrationData: { ...this.state.registrationData, last_name: e.target.value } })}
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
              onChange={(e) => this.setState({ registrationData: { ...this.state.registrationData, email: e.target.value } })}
            />
          </div>


          <div className="col-12">

            {registerErrorTag}

            <button className="btn btn-primary" type="submit" onClick={this.register}>
              Register
            </button>
          </div>
        </div>
      );
    }

    return (
      <AuthControl authRequired={false} >
        <div className="container">
          <h1>{this.state.event.title}</h1>

          <p>{this.state.event.description}</p>

          <h3>Register For Class</h3>

          {registerForm}

        </div>
      </AuthControl>
    );
  }
}

export default withRouter(ViewClassPage);
