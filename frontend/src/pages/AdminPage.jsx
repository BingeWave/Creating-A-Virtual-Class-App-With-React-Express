import React from 'react';

import API from '../util/Api';

import { withRouter } from "react-router";

import AuthControl from '../components/AuthControl';

import CohortItem from '../components/CohortItem';

import UserItem from '../components/UserItem';

import ClassItem from '../components/ClassItem';


class AdminPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      users: [],
      classes: [],
      cohorts: [],
      errors: null,
    };

  }


  componentDidMount() {

    API.getClasses((data) => {

      this.setState({ classes: data })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

    API.getUsers((data) => {

      this.setState({ users: data })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

    API.getCohorts((data) => {

      this.setState({ cohorts: data })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }


  render() {

    return (
      <AuthControl allowedRoles={['admin', 'super_admin']} >
        <div className="container">
          <h1>Admin Panel</h1>

          <div className="row">

            <div className="col-sm-4">
              <h3>Users</h3>


              {this.state.users.map((user, index) => {
                return (
                  <div className="col" key={index}>
                    <UserItem user={user} />
                  </div>
                )
              })}

            </div>

            <div className="col-sm-4">
              <h3>Classes</h3>

              <a className="btn btn-info" href="/classes/create">Schedule Class</a>

              {this.state.classes.map((data, index) => {
                return (
                  <div className="col" key={index}>
                    <ClassItem data={data} />
                  </div>
                )
              })}

            </div>

            <div className="col-sm-4">
              <h3>Cohorts</h3>

              <a className="btn btn-info" href="/cohorts/create">Cohort Class</a>

              {this.state.cohorts.map((cohort, index) => {
                return (
                  <div className="col" key={index}>
                    <CohortItem cohort={cohort} />
                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </AuthControl>
    );
  }
}

export default withRouter(AdminPage);
