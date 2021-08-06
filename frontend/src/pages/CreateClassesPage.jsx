import React from 'react';

import BasePage from './BasePage';

import API from '../util/Api';

import AuthControl from '../components/AuthControl';

import ClassForm from '../forms/ClassCreationForm';

import { withRouter } from "react-router";
 
class CreateClassesPage extends BasePage {

  constructor(props) {
   
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.handleInputField = this.handleInputField.bind(this);
    this.handleDateField = this.handleDateField.bind(this);

    this.state = {
      event_title : '',
      event_description : '',
      type : 5,
      films : [],
      videos : [],
      videosOptions : [],
      video_id : null,
      is_virtual_event : 1,
      requested_date_1 : null,
      auto_start : 1,
      errors : null,
    };
  }

  submitForm() {
    
    API.createClass(this.state, (data) => {

      this.props.history.push('/classes/view/' + data.id);

    }, (errors) => {
      this.setState({errors: errors.message});
    });
  }

   render() {

    let errorTag = '';

    if(this.state.errors){
      errorTag = <div className="alert alert-danger">{this.state.errors}</div>
    }

     return (
      <AuthControl  authRequired={true} >
        <div className="container">
            <h1>Create Class</h1>
            <ClassForm handleInputField={this.handleInputField} handleDateField={this.handleDateField} data={this.state}  />
            {errorTag}
            <button type="button" className="btn btn-success" onClick={this.submitForm}>
              Create Class
            </button>
        </div>
    </AuthControl>
     );
   }
 }
 
 export default withRouter(CreateClassesPage);
