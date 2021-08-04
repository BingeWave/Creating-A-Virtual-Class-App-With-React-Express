import React from 'react';

import API from '../util/Api';

import { withRouter } from "react-router";

import AuthControl from '../components/AuthControl';

import ClassItem from '../components/ClassItem';

class ViewCohortPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      cohort: {
        events : []
      },
      classes: [],
      errors: null,
    };

  }

  componentDidMount() {

    const id = this.props.match.params.id;

    API.getCohort(id, (data) => {

      this.setState({ cohort: data }, () => {
      });

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }

  render() {

    return (
      <AuthControl authRequired={false} >
        <div className="container">
          <h1>{this.state.cohort.name}</h1>

          <p>{this.state.cohort.description}</p>

          <h4>Classes</h4>

          {this.state.cohort.events.map((data, index) => {
            return (
              <ClassItem data={data} key={index} />
            )
          })}

        </div>
      </AuthControl>
    );
  }
}

export default withRouter(ViewCohortPage);
