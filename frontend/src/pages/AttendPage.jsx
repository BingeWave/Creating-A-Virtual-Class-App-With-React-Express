import React from 'react';

import API from '../util/Api';

import AuthControl from '../components/AuthControl';

import { withRouter } from "react-router";

import { useHistory } from "react-router-dom";

class AttendPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      event: {},
      errors: null,
    };

  }


  componentDidMount() {

    const id = this.props.match.params.id;

    API.hasAccessToClass(id, window.localStorage.getItem("user_id"), (response) => {

      API.getClass(id, (data) => {

        this.setState({ event: data }, () => {

          //ensures the widgets load after the state is set
          window.BingewaveConnector.init({ auth_control: window.localStorage.getItem("auth_token") });
        });

      }, (errors) => {
        this.setState({ errors: errors.message });
      });

    }, (error) => {

      alert("You must have signed up to class to access it. Please register");

      const history = useHistory();

      history.push('/classes/view/' + id);

    })

  }

  render() {

    return (
      <AuthControl authRequired={true} >
        <div className="container">
          <h1>Take Class {this.state.event.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: this.state.event.embed_video_chat }} />
        </div>
      </AuthControl>
    );
  }

}

export default withRouter(AttendPage);