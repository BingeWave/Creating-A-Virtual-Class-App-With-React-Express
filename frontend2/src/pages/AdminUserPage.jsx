import React from 'react';

import API from '../util/Api';

import { withRouter } from "react-router";

import AuthControl from '../components/AuthControl';


class AdminUserPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      user: { role: {} },
      errors: null,
    };

  }

  componentDidMount() {

    const id = this.props.match.params.id;

    API.getUser(id, (data) => {

      this.setState({ user: data });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });

  }

  setRole(event, role) {

    const user_id = this.props.match.params.id;

    let data = {
      account_id: user_id,
      role: role
    };

    if (event.target.checked) {
      //Load Current Cohort
      API.setAccountToRole(data, (response) => {

        //that.setState({ user : data });

      }, (errors) => {
        this.setState({ errors: errors.message });
      });

    } else {
      API.removeAccountFromRole(data, (response) => {

        //that.setState({ user : data });

      }, (errors) => {
        this.setState({ errors: errors.message });
      });

    }


  }

  render() {

    let errorTag = '';

    if (this.state.errors) {
      errorTag = <div className="alert alert-danger">{this.state.errors}</div>
    }

    return (
      <AuthControl allowedRoles={['admin', 'super_admin']} >
        <div className="container">
          <h1>Admin User Roles For {this.state.user.first_name} {this.state.user.last_name}</h1>

          {errorTag}

          <p className="lead">Set the user's role.</p>

          <div className="form-group">
            <input type="checkbox" value="1" checked={(this.state.user.role.is_member === '1') ? true : undefined} onChange={(e) => { this.setRole(e, 'is_member') }} />
            Set role to member.
          </div>

          <div className="form-group">
            <input type="checkbox" value="1" checked={(this.state.user.role.is_content_creator === '1') ? true : undefined} onChange={(e) => { this.setRole(e, 'is_content_creator') }} />
            Set role to content creator.
          </div>

          <div className="form-group">
            <input type="checkbox" value="1" checked={(this.state.user.role.is_moderator === '1') ? true : undefined} nChange={(e) => { this.setRole(e, 'is_moderator') }} />
            Set role to moderator.
          </div>

          <div className="form-group">
            <input type="checkbox" value="1" checked={(this.state.user.role.is_admin === '1') ? true : undefined} onChange={(e) => { this.setRole(e, 'is_admin') }} />
            Set role to admin.
          </div>

        </div>
      </AuthControl>
    );
  }
}

export default withRouter(AdminUserPage);
