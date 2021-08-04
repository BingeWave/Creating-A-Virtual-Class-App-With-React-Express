import React from 'react';

import BasePage from './BasePage';

import API from '../util/Api';

import AuthControl from '../components/AuthControl';

import ClassForm from '../forms/ClassForm';

import { withRouter } from "react-router";

import { useHistory } from "react-router-dom";


class UpdateClassPage extends BasePage {

  constructor(props) {

    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.handleInputField = this.handleInputField.bind(this);
    this.handleFileField = this.handleFileField.bind(this);

    this.state = {
      errors: null,
    };
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    API.getClass(id, (data) => {

      this.setState(data);

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }


  submitForm() {

    const id = this.props.match.params.id;

    this.setState({ errors: null });

    API.updateClass(id, this.state, (data) => {

      const history = useHistory();

      history.push('/classes/view/' + data.id);

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
          <h1>Update Class</h1>
          <ClassForm handleInputField={this.handleInputField} handleFileField={this.handleFileField} data={this.state} />
          {errorTag}
          <button type="button" className="btn btn-success" onClick={this.submitForm}>
            Update Class
          </button>
        </div>
      </AuthControl>
    );
  }
}

export default withRouter(UpdateClassPage);
