import React from 'react';

import API from '../util/Api';

import AuthControl from '../components/AuthControl';

import UserForm from '../forms/UserForm';

import { withRouter } from "react-router";


class UpdateUserPage extends React.Component {

  constructor(props) {

    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.handleInputField = this.handleInputField.bind(this);

    this.state = {
      passes : [],
      errors: null,
    };
  }

  componentDidMount() {

    API.getMyAccount((data) => {

      this.setState(data);

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

    API.getMyTickets(window.localStorage.getItem('user_id'), (data) => {

      this.setState({passes : data});

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }


  handleInputField(event, field_key) {

    let data = {};

    data[field_key] = event.target.value;

    this.setState(data);

  }

  submitForm() {

    this.setState({ errors: null });


    API.updateMyAccount(this.state, (data) => {

      alert("Account Sucessfully Updated");

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
      <AuthControl authRequired={true} >
        <div className="container">
          <h1>Update Account</h1>
          <UserForm handleInputField={this.handleInputField} data={this.state} />
          {errorTag}
          <button type="button" className="btn btn-success" onClick={this.submitForm}>
            Update Account
          </button>
        </div>

        <hr />

        <div className="container">
          <h1>Class Passes</h1>
          
          {this.state.passes.map( (data, index) => {
            let url = '/classes/attend/' + data.event.id;
            return (
              <div className="row" key={index}>
                <div className="col-sm-8">
                  <h4>{data.event.title}</h4>
                  {data.event.description}
                </div>
                <div className="col-sm-4">
                    <a className="btn btn-info btn-lg" href={url}>Attend</a>
                </div>
              </div>
            )
          })}

        </div>
      </AuthControl>
    );
  }
}

export default withRouter(UpdateUserPage);
