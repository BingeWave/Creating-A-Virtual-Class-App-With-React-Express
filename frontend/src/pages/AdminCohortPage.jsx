import React from 'react';

import API from '../util/Api';

import { withRouter } from "react-router";

import AuthControl from '../components/AuthControl';

import Select from 'react-select';

import UserItem from '../components/UserItem';

import ClassItem from '../components/ClassItem';


class AdminCohortPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      cohort: { accounts: [], events: [] },
      users: [],
      userOptions: [],
      classes: [],
      classOptions: [],
      errors: null,
    };

  }


  componentDidMount() {

    const id = this.props.match.params.id;

    //Load Current Cohort
    API.getCohort(id, (data) => {

      this.setState({ cohort: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

    //Load All Classes
    API.getClasses((data) => {

      let options = [];

      data.forEach(option => {
        options.push({ value: option.id, label: option.title });
      });

      this.setState({ classes: data, classOptions: options })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

    //Load All Users
    API.getUsers((data) => {

      let options = [];

      data.forEach(user => {
        options.push({ value: user.id, label: user.first_name + ' ' + user.last_name });
      });

      this.setState({ users: data, userOptions: options })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }

  addUserToCohort(user_id) {

    const cohort_id = this.props.match.params.id;

    API.addUserToCohort(cohort_id, { account_id: user_id }, (data) => {

      this.setState({ cohort: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }

  removeUserFromCohort(user_id) {

    const cohort_id = this.props.match.params.id;

    API.removeUserFromCohort(cohort_id, { account_id: user_id }, (data) => {

      this.setState({ cohort: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }

  addClassToCohort(event_id) {

    const cohort_id = this.props.match.params.id;

    API.addClassToCohort(cohort_id, { event_id: event_id }, (data) => {

      this.setState({ cohort: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }

  removeClassFromCohort(event_id) {

    const cohort_id = this.props.match.params.id;


    API.removeClassFromCohort(cohort_id, { event_id: event_id }, (data) => {

      this.setState({ cohort: data });

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
      <AuthControl allowedRoles={['admin', 'super_admin']} >
        <div className="container">
          <h1>Admin Cohort {this.state.cohort.name}</h1>


          {errorTag}

          <div className="row">

            <div className="col-sm-6">

              <div className="form-group">
                <label>Add User To Cohort</label>
                <Select options={this.state.userOptions} isMulti={false} onChange={(selectedOption) => this.addUserToCohort(selectedOption.value)} />
              </div>

              {this.state.cohort.accounts.map((user, index) => {
                return (

                  <UserItem user={user} key={index} cohort={this.state.cohort} removeUserFromCohort={(e) => this.removeUserFromCohort(user.id)} />

                )
              }, this)}

            </div>
            <div className="col-sm-6">

              <div className="form-group">
                <label>Add User To Event</label>
                <Select options={this.state.classOptions} isMulti={false} onChange={(selectedOption) => this.addClassToCohort(selectedOption.value)} />
              </div>

              {this.state.cohort.events.map((data, index) => {
                return (

                  <ClassItem data={data} key={index} cohort={this.state.cohort} removeClassFromCohort={(e) => this.removeClassFromCohort(data.id)} />

                )
              }, this)}

            </div>

          </div>


        </div>
      </AuthControl>
    );
  }
}

export default withRouter(AdminCohortPage);
