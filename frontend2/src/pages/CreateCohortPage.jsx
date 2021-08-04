import React from 'react';

import BasePage from './BasePage';

import API from '../util/Api';

import AuthControl from '../components/AuthControl';

import CohortForm from '../forms/CohortForm';

import { useHistory } from "react-router-dom";
 
class CreateCohortPage extends BasePage {

  constructor(props) {
   
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.handleInputField = this.handleInputField.bind(this);

    this.state = {
      name : '',
      description : '',
      errors : null,
    };
  }


  submitForm() {

    this.setState({errors: null});
    
    API.createCohort(this.state, (data) => {

      const history = useHistory();

      history.push('/cohorts/view/'+ data.id);

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
        <AuthControl  allowedRoles={['admin', 'super_admin']} >
            <div className="container">
                <h1>Create Cohort</h1>
                <CohortForm handleInputField={this.handleInputField} data={this.state}  />
                {errorTag}
                <button type="button" className="btn btn-success" onClick={this.submitForm}>
                  Create Cohort
                </button>
            </div>
         </AuthControl>
     );
   }
 }
 
export default CreateCohortPage ;
